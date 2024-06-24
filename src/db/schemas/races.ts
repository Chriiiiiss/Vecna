import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { charactersTable } from './characters';
import { traitsTable } from './traits';
import { RaceEnum } from '../../constants/constants';

export const racesTable = pgTable('races_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
});

export const subRaceTable = pgTable('sub_races_table', {
  id: serial('id').primaryKey(),
  name: text('name', {
    enum: [
      RaceEnum.Dwarf,
      RaceEnum.Elf,
      RaceEnum.Gnome,
      RaceEnum.HalfElf,
      RaceEnum.HalfOrc,
      RaceEnum.Halfling,
      RaceEnum.Human,
    ],
  }).notNull(),
  description: text('description').notNull(),
  raceId: integer('race_id')
    .notNull()
    .references(() => racesTable.id),
});

export const racesRelations = relations(racesTable, ({ many }) => ({
  subRaces: many(subRaceTable),
  characters: many(charactersTable),
  traits: many(traitsTable),
}));

export const subRaceRelations = relations(subRaceTable, ({ one, many }) => ({
  races: one(racesTable, {
    fields: [subRaceTable.raceId],
    references: [racesTable.id],
  }),
  traitsTable: many(traitsTable),
  char: many(charactersTable),
}));

export type InsertRace = typeof racesTable.$inferInsert;
export type SelectRace = typeof racesTable.$inferSelect;

export type InsertSubRace = typeof subRaceTable.$inferInsert;
export type SelectSubRace = typeof subRaceTable.$inferSelect;
