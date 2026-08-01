import { NextResponse } from 'next/server';

/** ACME HTTP-01 challenges — keys with hyphens MUST be quoted */
const CHALLENGES: Record<string, string> = {
  BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc:
    'BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc.yRwGqobGgyXziY36dsAxhQZu8SOH2WGbDVYC7wkk_mQ',
  'WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU':
    'WM4MSZSUnfjUF5FLxfLGm_NxtNN1HOOu-wdXHPVSCOU.fZBnGubut55syIF8x_eis8LuX1rnnGkVWbmdhYOejn0',
  'jMqFe9z6tTNgQ_epH9c7yaGv-Nbv1diP7NC7qI2KC8Y':
    'jMqFe9z6tTNgQ_epH9c7yaGv-Nbv1diP7NC7qI2KC8Y.ziKr66M-zY24vrtywobbg4XdltLWS8mrVQY_Sqv8yII',
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ token: string }> }
) {
  const { token } = await context.params;
  const body = CHALLENGES[token];

  if (!body) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
