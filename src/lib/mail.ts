import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { site } from '@/data/site';

const notifyTo = process.env.MAIL_NOTIFY_TO || 'info@saradanetralaya.org';
const LOGO_CID = 'sarada-logo@netralaya';

function publicSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');
  if (explicit) return explicit;

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return 'http://localhost:3000';
}

/**
 * Vercel does not ship `public/` into the serverless bundle, so a missing file
 * must fall back to a hosted URL instead of failing the whole send.
 */
function resolveLogo() {
  const logoPath = path.join(process.cwd(), 'public', 'sarada-logo.png');

  try {
    if (fs.existsSync(logoPath)) {
      return {
        src: `cid:${LOGO_CID}`,
        attachments: [
          {
            filename: 'sarada-logo.png',
            path: logoPath,
            cid: LOGO_CID,
            contentDisposition: 'inline' as const,
          },
        ],
      };
    }
  } catch (error) {
    console.error('Logo lookup failed, using hosted URL:', error);
  }

  return {
    src: `${publicSiteUrl()}/sarada-logo.png`,
    attachments: [],
  };
}

function getTransporter() {
  const host = process.env.MAIL_HOST || 'smtp.gmail.com';
  const port = Number(process.env.MAIL_PORT || 587);
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD?.replace(/^['"]|['"]$/g, '').replace(/\s+/g, '');

  if (!user || !pass) {
    throw new Error('MAIL_USERNAME / MAIL_PASSWORD are not configured');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function fromAddress() {
  const address = process.env.MAIL_FROM_ADDRESS || process.env.MAIL_USERNAME || 'noreply@localhost';
  const name = process.env.MAIL_FROM_NAME || process.env.APP_NAME || 'SARADA Netralaya';
  return `"${name}" <${address}>`;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function rowsToHtml(rows: Array<[string, string]>) {
  const body = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:150px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:#0B1F3A;font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value || '—')}</td>
        </tr>`
    )
    .join('');

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">${body}</table>`;
}

/** Branded HTML shell with embedded logo */
export function buildBrandedEmailHtml(options: {
  title: string;
  subtitle: string;
  rowsHtml: string;
  badge?: string;
  extraHtml?: string;
  logoSrc?: string;
}) {
  const badge = options.badge || 'Website notification';
  const logoSrc = options.logoSrc || `cid:${LOGO_CID}`;
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#eef3f8;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef3f8;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 12px 40px rgba(11,31,58,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,#0B1F3A 0%,#123A5C 100%);padding:22px 28px;text-align:center;">
              <img src="${logoSrc}" alt="SARADA Netralaya" width="220" style="display:block;margin:0 auto 14px auto;max-width:220px;height:auto;background:#ffffff;border-radius:10px;padding:10px 14px;" />
              <div style="display:inline-block;background:rgba(245,213,101,0.18);border:1px solid rgba(245,213,101,0.45);color:#F5D565;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:6px 12px;border-radius:999px;">
                ${escapeHtml(badge)}
              </div>
              <h1 style="margin:14px 0 6px;color:#ffffff;font-size:22px;line-height:1.3;">${escapeHtml(options.title)}</h1>
              <p style="margin:0;color:rgba(255,255,255,0.75);font-size:13px;line-height:1.5;">${escapeHtml(options.subtitle)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 8px;">
              ${options.extraHtml || ''}
              ${options.rowsHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 24px;text-align:center;">
              <a href="tel:${site.phones[0].replace(/\s/g, '')}" style="display:inline-block;background:#C8102E;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:12px 22px;border-radius:999px;margin:4px;">
                Call ${escapeHtml(site.phones[0])}
              </a>
              <a href="tel:${site.phones[1].replace(/\s/g, '')}" style="display:inline-block;background:#0B1F3A;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:12px 22px;border-radius:999px;margin:4px;">
                Call ${escapeHtml(site.phones[1])}
              </a>
            </td>
          </tr>
          <tr>
            <td style="background:#F8FAFC;border-top:1px solid #e2e8f0;padding:18px 28px;text-align:center;">
              <p style="margin:0 0 6px;color:#0B1F3A;font-size:13px;font-weight:700;">${escapeHtml(site.name)}</p>
              <p style="margin:0 0 4px;color:#64748b;font-size:12px;line-height:1.5;">${escapeHtml(site.address)}</p>
              <p style="margin:0 0 4px;color:#64748b;font-size:12px;">${escapeHtml(site.phones.join(' · '))}</p>
              <p style="margin:8px 0 0;color:#94a3b8;font-size:11px;font-style:italic;">${escapeHtml(site.motto)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendBrandedTo(options: {
  to: string;
  subject: string;
  title: string;
  subtitle: string;
  rows: Array<[string, string]>;
  badge?: string;
  replyTo?: string | null;
  extraHtml?: string;
}) {
  const transporter = getTransporter();
  const logo = resolveLogo();
  const rowsHtml = rowsToHtml(options.rows);
  const html = buildBrandedEmailHtml({
    title: options.title,
    subtitle: options.subtitle,
    rowsHtml,
    badge: options.badge,
    extraHtml: options.extraHtml,
    logoSrc: logo.src,
  });
  const text = [options.subtitle, '', ...options.rows.map(([k, v]) => `${k}: ${v || '—'}`)].join('\n');

  await transporter.sendMail({
    from: fromAddress(),
    to: options.to,
    subject: options.subject,
    text,
    html,
    replyTo: options.replyTo || undefined,
    attachments: logo.attachments,
  });
}

/** Admin notify — hospital inbox */
export async function sendBrandedAdminMail(options: {
  subject: string;
  title: string;
  subtitle: string;
  rows: Array<[string, string]>;
  badge?: string;
  replyTo?: string | null;
}) {
  await sendBrandedTo({
    ...options,
    to: notifyTo,
  });
}

/** Thank-you / confirmation to the patient or visitor */
export async function sendUserThankYouMail(options: {
  to: string;
  kind: 'appointment' | 'contact';
  name: string;
  rows: Array<[string, string]>;
}) {
  const isAppointment = options.kind === 'appointment';
  const assurance = isAppointment
    ? 'Our team has received your appointment request. We will call you shortly to confirm your preferred date and time. Please keep your phone reachable.'
    : 'Thank you for contacting SARADA Netralaya. We have received your message and our team will get back to you soon.';

  await sendBrandedTo({
    to: options.to,
    subject: isAppointment
      ? `Appointment request received — ${site.name}`
      : `We received your message — ${site.name}`,
    title: isAppointment ? 'Thank you for booking' : 'Thank you for writing to us',
    subtitle: `Dear ${options.name}, your request has been received successfully.`,
    badge: isAppointment ? 'Booking confirmation' : 'Message confirmation',
    replyTo: notifyTo,
    extraHtml: `<p style="margin:0 0 18px;padding:14px 16px;background:#ECFDF5;border:1px solid #A7F3D0;border-radius:12px;color:#065F46;font-size:14px;line-height:1.55;">${escapeHtml(assurance)}</p>`,
    rows: options.rows,
  });
}
