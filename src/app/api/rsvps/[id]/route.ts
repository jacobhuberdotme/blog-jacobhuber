import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const sql = {
  query: (text: string, params?: (string | number | boolean | null)[]) => pool.query(text, params),
};

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { guests, message } = body;

    if (!Array.isArray(guests)) {
      return NextResponse.json({ error: 'Invalid guest data' }, { status: 400 });
    }

    await sql.query('UPDATE rsvps SET message = $1 WHERE id = $2;', [message || null, id]);
    await sql.query('DELETE FROM guests WHERE rsvp_id = $1;', [id]);

    for (const guest of guests) {
      if (!guest.name) continue;
      await sql.query('INSERT INTO guests (rsvp_id, name, attending) VALUES ($1, $2, $3);', [id, guest.name, guest.attending]);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[PATCH /api/rsvps/:id]', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await sql.query('DELETE FROM rsvps WHERE id = $1;', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[DELETE /api/rsvps/:id]', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { rows } = await sql.query(
      `SELECT r.id, r.email, r.message, r.created_at,
              json_agg(json_build_object('name', g.name, 'attending', g.attending)) AS guests
       FROM rsvps r
       LEFT JOIN guests g ON g.rsvp_id = r.id
       GROUP BY r.id
       ORDER BY r.created_at DESC;`
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error('[GET /api/rsvps]', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}