import { db } from '@/db';
import { attendingOptions } from '@/db/schema';
import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const options = await db
      .select()
      .from(attendingOptions)
      .orderBy(sql`${attendingOptions.option} DESC`); 

    return NextResponse.json(options);
  } catch (error) {
    console.error('Error fetching attending options:', error);
    return NextResponse.json(
      { error: 'Failed to fetch attending options' },
      { status: 500 }
    );
  }
}