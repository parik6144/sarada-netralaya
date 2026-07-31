import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** ACME HTTP-01 challenges for SSL / domain verification */
const CHALLENGES: Record<string, string> = {
  BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc:
    'BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc.yRwGqobGgyXziY36dsAxhQZu8SOH2WGbDVYC7wkk_mQ',
  WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU:
    'WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU.fZBnGubut55syIF8x_eis8LuX1rnnGkVWbmdhYOejn0',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const prefix = '/.well-known/acme-challenge/';
  if (!pathname.startsWith(prefix)) return NextResponse.next();

  const token = decodeURIComponent(pathname.slice(prefix.length).replace(/\/$/, ''));
  const body = CHALLENGES[token];
  if (!body) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  // Broad matcher — path-to-regexp can miss leading-dot segments otherwise
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
