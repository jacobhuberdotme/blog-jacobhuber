import { db } from '@/app/db';
import { preferredTimeOptions } from '@/app/db/schema'; 
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const options = await db
      .select()
      .from(preferredTimeOptions)
      .orderBy(preferredTimeOptions.time);

    return NextResponse.json(options);
  } catch (error) {
    console.error('Error fetching preferred time options:', error);
    return NextResponse.json(
      { error: 'Failed to fetch preferred time options' },
      { status: 500 }
    );
  }
}