import { char, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  username: varchar('name', { length: 49 }).notNull().unique(),
  password: char('password', { length: 61 }).notNull(),
  role: varchar('role', { enum: ['Player', 'MJ'], length: 6 }).notNull(),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
