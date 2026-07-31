import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Serve ACME HTTP-01 challenge files.
 * Prefer public/.well-known when possible; this is a fallback for extensionless tokens.
 */
const CHALLENGES: Record<string, string> = {
  BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc:
    'BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc.yRwGqobGgyXziY36dsAxhQZu8SOH2WGbDVYC7wkk_mQ',
  WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU:
    'WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU.fZBnGubut55syIF8x_eis8LuX1rnnGkVWbmdhYOejn0',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith('/.well-known/acme-challenge/')) {
    return NextResponse.next();
  }

  const token = decodeURIComponent(
    pathname.replace(/^\/\.well-known\/acme-challenge\//, '').replace(/\/$/, '')
  );
  const body = CHALLENGES[token];
  if (!body) return NextResponse.next();

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
