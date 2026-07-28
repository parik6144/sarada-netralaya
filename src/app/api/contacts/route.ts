import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendBrandedAdminMail } from '@/lib/mail';

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

    const contact = await db.contact.create({
      data: {
        name,
        phone,
        email,
        subject,
        message,
      },
    });

    let mailSent = true;
    try {
      await sendBrandedAdminMail({
        subject: `New Contact Message — ${name}`,
        title: 'New Contact Form Message',
        subtitle: 'Someone sent a message from the SARADA Netralaya contact page.',
        badge: 'Contact enquiry',
        replyTo: email,
        rows: [
          ['Name', name],
          ['Phone', phone],
          ['Email', email || ''],
          ['Subject', subject || 'Website enquiry'],
          ['Message', message],
          ['Contact ID', contact.id],
        ],
      });
    } catch (mailError) {
      mailSent = false;
      console.error('Contact mail error:', mailError);
    }

    return NextResponse.json({ success: true, id: contact.id, mailSent }, { status: 201 });
  } catch (error) {
    console.error('Contact creation error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const contacts = await db.contact.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return NextResponse.json({ contacts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}
