import { db } from '@/app/db';
import { RSVPs } from '@/app/db/schema';
import { eq, and } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    const { name, email, attending, preferredTime, message } = await req.json();

    if (!id || !email) {
      return NextResponse.json({ error: 'Invalid RSVP ID or email.' }, { status: 400 });
    }

    // Check ownership
    const existingRSVP = await db
      .select()
      .from(RSVPs)
      .where(and(eq(RSVPs.id, id), eq(RSVPs.email, email)))
      .limit(1);

    if (existingRSVP.length === 0) {
      return NextResponse.json({ error: 'Unauthorized or RSVP not found.' }, { status: 403 });
    }

    await db
      .update(RSVPs)
      .set({ name, attending, preferredTime, message })
      .where(eq(RSVPs.id, id));

    return NextResponse.json({ message: 'RSVP updated successfully.' });
  } catch (error) {
    console.error('Error in PATCH /api/rsvps:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    const email = req.headers.get('email'); // Or pass email in the request body

    if (!id || !email) {
      return NextResponse.json({ error: 'Invalid RSVP ID or email.' }, { status: 400 });
    }

    // Check ownership
    const existingRSVP = await db
      .select()
      .from(RSVPs)
      .where(and(eq(RSVPs.id, id), eq(RSVPs.email, email)))
      .limit(1);

    if (existingRSVP.length === 0) {
      return NextResponse.json({ error: 'Unauthorized or RSVP not found.' }, { status: 403 });
    }

    await db.delete(RSVPs).where(eq(RSVPs.id, id));
    return NextResponse.json({ message: 'RSVP deleted successfully.' });
  } catch (error) {
    console.error('Error in DELETE /api/rsvps:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}