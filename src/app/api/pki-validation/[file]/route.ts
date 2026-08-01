import { NextResponse } from 'next/server';

const PKI: Record<string, string> = {
  'EBDC98045FA603E65DF7D7B69FA7A2DF.txt':
    '18E00BD208DAAD4959A20B89F37FAE4E7F60FC3A11451BB3872A44533F7998EA\ncomodoca.com\n28c237aaf7f6cd3\n',
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> }
) {
  const { file } = await context.params;
  const body = PKI[file] ?? PKI[`${file}.txt`];
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
