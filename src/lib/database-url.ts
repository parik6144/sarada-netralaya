import path from 'path';

/** Resolve a writable SQLite path; avoid Prisma relative-path ambiguity. */
export function getDatabaseUrl(): string {
  const configured = process.env.DATABASE_URL?.trim();

  if (configured && !configured.includes('./db/dev.db')) {
    return configured;
  }

  if (process.env.VERCEL) {
    return 'file:/tmp/sarada-netralaya.db';
  }

  const dbPath = path.join(process.cwd(), 'db', 'dev.db');
  return `file:${dbPath.replace(/\\/g, '/')}`;
}
