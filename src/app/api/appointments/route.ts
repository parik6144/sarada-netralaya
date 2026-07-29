import { NextResponse } from 'next/server';
import { db, ensureDbSchema } from '@/lib/db';
import { sendBrandedAdminMail, sendUserThankYouMail } from '@/lib/mail';

function makeReferenceId() {
  return `WEB-${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const patientName = String(body.patientName || body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim() || null;
    const doctor = String(body.doctor || '').trim();
    const department = String(body.department || 'Eye Care').trim();
    const preferredDate = String(body.preferredDate || body.date || '').trim();
    const preferredTime = String(body.preferredTime || body.time || '').trim();
    const symptoms = String(body.symptoms || body.message || '').trim() || null;
    const hasInsurance = Boolean(body.hasInsurance);
    const insuranceName = String(body.insuranceName || '').trim() || null;

    if (!patientName || !phone || !doctor || !preferredDate || !preferredTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try {
      await ensureDbSchema();
    } catch (schemaError) {
      console.error('Appointment schema init skipped:', schemaError);
    }

    let bookingId = makeReferenceId();
    let dbSaved = false;

    try {
      const appointment = await db.appointment.create({
        data: {
          patientName,
          phone,
          email,
          doctor,
          department,
          preferredDate,
          preferredTime,
          symptoms,
          hasInsurance,
          insuranceName,
          status: 'pending',
        },
      });
      bookingId = appointment.id;
      dbSaved = true;
    } catch (dbError) {
      console.error('Appointment DB error:', dbError);
    }

    const detailRows: Array<[string, string]> = [
      ['Patient', patientName],
      ['Phone', phone],
      ['Email', email || ''],
      ['Doctor', doctor],
      ['Department', department],
      ['Date', preferredDate],
      ['Time', preferredTime],
      ['Message', symptoms || ''],
      ['Insurance', hasInsurance ? insuranceName || 'Yes' : 'No'],
      ['Booking ID', bookingId],
    ];

    let mailSent = false;
    try {
      await sendBrandedAdminMail({
        subject: `New Appointment — ${patientName} (${preferredDate} ${preferredTime})`,
        title: 'New Appointment Booking',
        subtitle: 'A patient submitted a booking request from the SARADA Netralaya website.',
        badge: 'Appointment request',
        replyTo: email,
        rows: detailRows,
      });
      mailSent = true;
    } catch (mailError) {
      console.error('Appointment admin mail error:', mailError);
    }

    // A bad patient address must not invalidate the hospital notification.
    if (email) {
      try {
        await sendUserThankYouMail({
          to: email,
          kind: 'appointment',
          name: patientName,
          rows: [
            ['Patient', patientName],
            ['Phone', phone],
            ['Doctor', doctor],
            ['Date', preferredDate],
            ['Time', preferredTime],
            ['Booking ID', bookingId],
          ],
        });
      } catch (mailError) {
        console.error('Appointment patient mail error:', mailError);
      }
    }

    if (!dbSaved && !mailSent) {
      const hint =
        process.env.NODE_ENV === 'development'
          ? 'Database and email both failed. Check MAIL_USERNAME / MAIL_PASSWORD in .env and run: npx prisma db push'
          : 'Could not save booking. Please call the hospital directly.';
      return NextResponse.json({ error: hint }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, id: bookingId, mailSent, dbSaved },
      { status: 201 }
    );
  } catch (error) {
    console.error('Appointment creation error:', error);
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureDbSchema();
    const appointments = await db.appointment.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return NextResponse.json({ appointments });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}
