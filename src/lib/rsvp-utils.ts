import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// Insert a new RSVP
export async function addRSVP(name: string, email: string, status: string, message?: string) {
  await sql`
    INSERT INTO RSVPs (name, email, status, message)
    VALUES (${name}, ${email}, ${status}, ${message || null})
  `;
  return { message: "RSVP added successfully" };
}

// Fetch all RSVPs
export async function getRSVPs() {
  const data = await sql`SELECT * FROM RSVPs ORDER BY created_at DESC`;
  return data;
}