import { NextResponse } from 'next/server';

/** ACME HTTP-01 challenges — keep tokens here until SSL verification succeeds. */
const CHALLENGES: Record<string, string> = {
  BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc:
    'BVNMn0fKoy0lKbIrD1u6l85BqQOlczbGsIIIf68aVEc.yRwGqobGgyXziY36dsAxhQZu8SOH2WGbDVYC7wkk_mQ',
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
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-store',
    },
  });
}
