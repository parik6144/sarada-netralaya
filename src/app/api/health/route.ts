import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db, ensureDbSchema } from '@/lib/db';
import { getDatabaseUrl } from '@/lib/database-url';

/** Diagnostics for booking failures — reports config state without leaking secrets. */
export async function GET() {
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD?.replace(/^['"]|['"]$/g, '').replace(/\s+/g, '');
  const host = process.env.MAIL_HOST || 'smtp.gmail.com';
  const port = Number(process.env.MAIL_PORT || 587);

  const mail: Record<string, unknown> = {
    host,
    port,
    hasUsername: Boolean(user),
    hasPassword: Boolean(pass),
    passwordLength: pass?.length ?? 0,
    notifyTo: process.env.MAIL_NOTIFY_TO || 'info@saradanetralaya.org (default)',
    fromAddress: process.env.MAIL_FROM_ADDRESS || user || null,
  };

  if (user && pass) {
    try {
      await nodemailer
        .createTransport({ host, port, secure: port === 465, auth: { user, pass } })
        .verify();
      mail.smtpVerified = true;
    } catch (error) {
      mail.smtpVerified = false;
      mail.smtpError = error instanceof Error ? error.message : String(error);
    }
  } else {
    mail.smtpVerified = false;
    mail.smtpError = 'MAIL_USERNAME / MAIL_PASSWORD missing in environment';
  }

  const database: Record<string, unknown> = { url: getDatabaseUrl() };
  try {
    await ensureDbSchema();
    database.appointmentCount = await db.appointment.count();
    database.writable = true;
  } catch (error) {
    database.writable = false;
    database.error = error instanceof Error ? error.message : String(error);
  }

  const bookingWorks = mail.smtpVerified === true || database.writable === true;

  return NextResponse.json({
    bookingWorks,
    onVercel: Boolean(process.env.VERCEL),
    mail,
    database,
  });
}
