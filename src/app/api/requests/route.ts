// src/app/api/requests/route.ts
import { NextResponse } from 'next/server';
import { getRequests } from '@/lib/requests';

export async function GET() {
  const requests = getRequests();
  return NextResponse.json(requests);
}
