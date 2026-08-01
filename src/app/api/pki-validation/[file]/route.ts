import { NextResponse } from 'next/server';

const PKI: Record<string, string> = {
  '30487DD6EC1B2C75FC191895EC7D2257.txt':
    '707C1F750DF745BEF4E5E78DAFCB425334F9C2B54BDDD0CFD4BCE8E80D61AC80\ncomodoca.com\nd2eea157985e7c4\n',
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
