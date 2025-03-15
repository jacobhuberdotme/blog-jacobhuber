import { drizzle } from 'drizzle-orm/neon-http';
import { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db: NeonHttpDatabase<typeof schema> = drizzle(sql, { schema });