import { db } from "@/app/db";
import { TimeSlots } from "@/app/db/schema"; 
import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";

export async function GET() {
  try {
    const timeSlots = await db
      .select()
      .from(TimeSlots)
      .orderBy(sql`LOWER(${TimeSlots.timeSlot})`);

    return NextResponse.json(timeSlots);
  } catch (error) {
    console.error("Error fetching time slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch time slots" },
      { status: 500 }
    );
  }
}