import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'; // Import 'uuid' from pg-core

export const rooms = pgTable('rooms', {
  id: uuid('id').primaryKey().defaultRandom(), // Use Drizzle's uuid(), give it a name
  name: text('name').notNull(),               // Give column names as arguments
  description: text('description'),            // Optional, so no .notNull()
  createdAt: timestamp('created_at').defaultNow().notNull(), // Corrected typo and added column name
});