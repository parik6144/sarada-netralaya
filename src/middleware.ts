import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** ACME HTTP-01 tokens — keys with hyphens MUST be quoted */
const ACME: Record<string, string> = {
  BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc:
    'BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc.yRwGqobGgyXziY36dsAxhQZu8SOH2WGbDVYC7wkk_mQ',
  'WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU':
    'WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU.fZBnGubut55syIF8x_eis8LuX1rnnGkVWbmdhYOejn0',
  'jMqFe9z6tTNgQ_epH9c7yaGv-Nbv1diP7NC7qI2KC8Y':
    'jMqFe9z6tTNgQ_epH9c7yaGv-Nbv1diP7NC7qI2KC8Y.ziKr66M-zY24vrtywobbg4XdltLWS8mrVQY_Sqv8yII',
};

/** Sectigo / Comodo SSL Domain Control Validation files */
const PKI: Record<string, string> = {
  'EBDC98045FA603E65DF7D7B69FA7A2DF.txt':
    '18E00BD208DAAD4959A20B89F37FAE4E7F60FC3A11451BB3872A44533F7998EA\ncomodoca.com\n28c237aaf7f6cd3\n',
};

function plain(body: string) {
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/.well-known/acme-challenge/')) {
    const token = decodeURIComponent(
      pathname.replace(/^\/\.well-known\/acme-challenge\//, '').replace(/\/$/, '')
    );
    const body = ACME[token];
    if (body) return plain(body);
  }

  if (pathname.startsWith('/.well-known/pki-validation/')) {
    const file = decodeURIComponent(
      pathname.replace(/^\/\.well-known\/pki-validation\//, '').replace(/\/$/, '')
    );
    const body = PKI[file];
    if (body) return plain(body);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
