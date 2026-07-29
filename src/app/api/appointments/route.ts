import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendBrandedAdminMail, sendUserThankYouMail } from '@/lib/mail';

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
      ['Booking ID', appointment.id],
    ];

    let mailSent = true;
    try {
      await sendBrandedAdminMail({
        subject: `New Appointment — ${patientName} (${preferredDate} ${preferredTime})`,
        title: 'New Appointment Booking',
        subtitle: 'A patient submitted a booking request from the SARADA Netralaya website.',
        badge: 'Appointment request',
        replyTo: email,
        rows: detailRows,
      });

      if (email) {
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
            ['Booking ID', appointment.id],
          ],
        });
      }
    } catch (mailError) {
      mailSent = false;
      console.error('Appointment mail error:', mailError);
    }

    return NextResponse.json({ success: true, id: appointment.id, mailSent }, { status: 201 });
  } catch (error) {
    console.error('Appointment creation error:', error);
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const appointments = await db.appointment.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return NextResponse.json({ appointments });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}
