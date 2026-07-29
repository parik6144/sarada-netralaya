import { PrismaClient } from '@prisma/client';
import { getDatabaseUrl } from './database-url';

process.env.DATABASE_URL = getDatabaseUrl();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  schemaReady: Promise<void> | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}

async function createTablesIfMissing() {
  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Appointment" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "patientName" TEXT NOT NULL,
      "phone" TEXT NOT NULL,
      "email" TEXT,
      "doctor" TEXT NOT NULL,
      "department" TEXT NOT NULL,
      "preferredDate" TEXT NOT NULL,
      "preferredTime" TEXT NOT NULL,
      "symptoms" TEXT,
      "hasInsurance" BOOLEAN NOT NULL DEFAULT false,
      "insuranceName" TEXT,
      "status" TEXT NOT NULL DEFAULT 'pending',
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Contact" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "name" TEXT NOT NULL,
      "phone" TEXT NOT NULL,
      "email" TEXT,
      "subject" TEXT,
      "message" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

/** Ensure SQLite tables exist. Never throws — booking can still succeed via email. */
export function ensureDbSchema(): Promise<void> {
  if (!globalForPrisma.schemaReady) {
    globalForPrisma.schemaReady = (async () => {
      try {
        await db.$queryRaw`SELECT 1 FROM "Appointment" LIMIT 1`;
        return;
      } catch {
        // Table missing — create below.
      }

      try {
        await createTablesIfMissing();
      } catch (error) {
        console.error('ensureDbSchema failed (non-fatal):', error);
      }
    })();
  }

  return globalForPrisma.schemaReady;
}
