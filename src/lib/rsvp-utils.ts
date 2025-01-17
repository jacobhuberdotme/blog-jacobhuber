import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// Initialize the RSVPs table
export async function initializeRSVPTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS RSVPs (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      status TEXT NOT NULL,
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  return { message: "RSVPs table initialized successfully" };
}

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