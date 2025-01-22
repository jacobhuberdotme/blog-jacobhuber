import { db } from "@/app/db";
import { RSVPs } from "@/app/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq, sql } from 'drizzle-orm';

export async function GET() {
  try {
    const rsvps = await db
      .select()
      .from(RSVPs)
      .orderBy(sql`LOWER(${RSVPs.name})`);

    return NextResponse.json(rsvps);
  } catch (error) {
    console.error("Error fetching RSVPs:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSVPs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, attending, preferredTime, message } = await req.json();

    // Check if user already has an RSVP
    const existingRSVP = await db
      .select()
      .from(RSVPs)
      .where(eq(RSVPs.email, email))
      .limit(1);

    if (existingRSVP.length > 0) {
      return NextResponse.json({ error: 'You can only create one RSVP.' }, { status: 403 });
    }

    await db.insert(RSVPs).values({ name, email, attending, preferredTime, message });

    return NextResponse.json({ message: 'RSVP created successfully.' });
  } catch (error) {
    console.error('Error in POST /api/rsvps:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}