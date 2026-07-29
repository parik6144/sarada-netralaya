import { NextResponse } from 'next/server';
import { db, ensureDbSchema } from '@/lib/db';
import { sendBrandedAdminMail, sendUserThankYouMail } from '@/lib/mail';

function makeReferenceId() {
  return `WEB-${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim() || null;
    const subject = String(body.subject || '').trim() || null;
    const message = String(body.message || '').trim();

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    try {
      await ensureDbSchema();
    } catch (schemaError) {
      console.error('Contact schema init skipped:', schemaError);
    }

    let contactId = makeReferenceId();
    let dbSaved = false;

    try {
      const contact = await db.contact.create({
        data: {
          name,
          phone,
          email,
          subject,
          message,
        },
      });
      contactId = contact.id;
      dbSaved = true;
    } catch (dbError) {
      console.error('Contact DB error:', dbError);
    }

    const detailRows: Array<[string, string]> = [
      ['Name', name],
      ['Phone', phone],
      ['Email', email || ''],
      ['Subject', subject || 'Website enquiry'],
      ['Message', message],
      ['Contact ID', contactId],
    ];

    let mailSent = false;
    try {
      await sendBrandedAdminMail({
        subject: `New Contact Message — ${name}`,
        title: 'New Contact Form Message',
        subtitle: 'Someone sent a message from the SARADA Netralaya contact page.',
        badge: 'Contact enquiry',
        replyTo: email,
        rows: detailRows,
      });
      mailSent = true;
    } catch (mailError) {
      console.error('Contact admin mail error:', mailError);
    }

    if (email) {
      try {
        await sendUserThankYouMail({
          to: email,
          kind: 'contact',
          name,
          rows: [
            ['Name', name],
            ['Phone', phone],
            ['Subject', subject || 'Website enquiry'],
            ['Reference', contactId],
          ],
        });
      } catch (mailError) {
        console.error('Contact patient mail error:', mailError);
      }
    }

    if (!dbSaved && !mailSent) {
      return NextResponse.json(
        { error: 'Could not send message. Please call the hospital directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: contactId, mailSent, dbSaved },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact creation error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureDbSchema();
    const contacts = await db.contact.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return NextResponse.json({ contacts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
