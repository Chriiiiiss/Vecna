import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { charactersTable } from './characters';

export const racesTable = pgTable('races_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
});

export const subRaceTable = pgTable('sub_races_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  raceId: integer('race_id')
    .notNull()
    .references(() => racesTable.id),
});

export const racesRelations = relations(racesTable, ({ many }) => ({
  subRaces: many(subRaceTable),
  characters: many(charactersTable),
}));

export const subRaceRelations = relations(subRaceTable, ({ one }) => ({
  races: one(racesTable, {
    fields: [subRaceTable.raceId],
    references: [racesTable.id],
  }),
}));

export type InsertRace = typeof racesTable.$inferInsert;
export type SelectRace = typeof racesTable.$inferSelect;

export type InsertSubRace = typeof subRaceTable.$inferInsert;
export type SelectSubRace = typeof subRaceTable.$inferSelect;
