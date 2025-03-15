import { db } from "@/db";
import { TimeSlots } from "@/db/schema"; 
import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";

export async function GET() {
  try {
    const timeSlots = await db
      .select()
      .from(TimeSlots)
      .orderBy(sql`LOWER(${TimeSlots.timeSlot})`);

    const response = NextResponse.json(timeSlots);

    // Add Cache-Control headers to ensure no caching at any level
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error fetching time slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch time slots" },
      { status: 500 }
    );
  }
}