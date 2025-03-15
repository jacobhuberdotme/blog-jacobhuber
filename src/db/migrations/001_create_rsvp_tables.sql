-- Drop tables if they already exist
DROP TABLE IF EXISTS guests CASCADE;
DROP TABLE IF EXISTS rsvps CASCADE;

-- Create RSVPs table
CREATE TABLE rsvps (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Guests table
CREATE TABLE guests (
  id SERIAL PRIMARY KEY,
  rsvp_id INTEGER NOT NULL REFERENCES rsvps(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL
);