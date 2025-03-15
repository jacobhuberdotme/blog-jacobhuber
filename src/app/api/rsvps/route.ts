import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query(
      `SELECT r.id AS id, r.email, r.message, r.created_at,
              COALESCE(json_agg(
                json_build_object('id', g.id, 'name', g.name, 'attending', g.attending)
              ) FILTER (WHERE g.id IS NOT NULL), '[]') AS guests
       FROM rsvps r
       LEFT JOIN guests g ON r.id = g.rsvp_id
       GROUP BY r.id
       ORDER BY r.created_at DESC`
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Failed to fetch RSVPs:', error);
    return NextResponse.json({ error: 'Failed to fetch RSVPs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, message, guests } = await req.json();


    const insertRSVP = await pool.query(
      `INSERT INTO rsvps (email, message) VALUES ($1, $2) RETURNING id`,
      [email, message]
    );
    const rsvpId = insertRSVP.rows[0].id;

    // Insert guests
    for (const guest of guests) {
      await pool.query(
        `INSERT INTO guests (rsvp_id, name, attending) VALUES ($1, $2, $3)`,
        [rsvpId, guest.name, guest.attending]
      );
    }

    return NextResponse.json({ message: 'RSVP created successfully.', rsvpId });
  } catch (error) {
    console.error('Error in POST /api/rsvps:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}