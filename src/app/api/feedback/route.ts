import { NextResponse } from 'next/server';
import { sendBrandedAdminMail, sendUserThankYouMail } from '@/lib/mail';

/**
 * Feedback is email-only — never stored for public display on the website.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim() || null;
    const rating = String(body.rating || '').trim() || null;
    const message = String(body.message || '').trim();

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Please share your name, phone, and feedback message.' }, { status: 400 });
    }

    const rows: Array<[string, string]> = [
      ['Name', name],
      ['Phone', phone],
      ['Email', email || ''],
      ['Rating', rating || 'Not given'],
      ['Feedback', message],
    ];

    try {
      await sendBrandedAdminMail({
        subject: `Patient Feedback — ${name}`,
        title: 'New Website Feedback',
        subtitle: 'A visitor shared feedback from the SARADA Netralaya feedback page.',
        badge: 'Feedback',
        replyTo: email,
        rows,
      });
    } catch (mailError) {
      console.error('Feedback admin mail error:', mailError);
      return NextResponse.json(
        { error: 'Could not send feedback. Please email info@saradanetralaya.org or call the hospital.' },
        { status: 500 }
      );
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
            ['Rating', rating || 'Not given'],
          ],
        });
      } catch (mailError) {
        console.error('Feedback thank-you mail error:', mailError);
      }
    }

    return NextResponse.json({ success: true, mailSent: true }, { status: 201 });
  } catch (error) {
    console.error('Feedback error:', error);
    return NextResponse.json({ error: 'Failed to send feedback' }, { status: 500 });
  }
}
