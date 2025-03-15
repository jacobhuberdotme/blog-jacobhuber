import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const RSVPs = pgTable('rsvps', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  attending: text('attending').notNull(),
  preferredTime: text('preferred_time').notNull(),
  message: text('message'),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

export const attendingOptions = pgTable('attending_options', {
  id: serial('id').primaryKey(),
  option: text('option').notNull(), 
});

export const preferredTimeOptions = pgTable('preferred_time_options', {
  id: serial('id').primaryKey(),
  time: text('option').notNull(), 
});

export const TimeSlots = pgTable("time_slots", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  timeSlot: text("time_slot").notNull(),
});