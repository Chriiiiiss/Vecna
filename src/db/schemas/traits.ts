import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { racesTable, subRaceTable } from './races';
import { relations } from 'drizzle-orm';
import { charactersTable } from './characters';

export const traitsTable = pgTable('traits_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  caracteristics: text('caracteristics', {
    enum: ['FOR', 'DEX', 'CONS', 'CHA', 'SAG', 'INT'],
  }),
  modifier: integer('modifier'),
  description: text('description').notNull(),
});

export const traitsToRaceTable = pgTable('traits_to_race_table', {
  traitId: integer('trait_id')
    .notNull()
    .references(() => traitsTable.id),
  raceId: integer('race_id')
    .notNull()
    .references(() => racesTable.id),
});

export const traitsToSubRaceTable = pgTable('traits_to_sub_race_table', {
  traitId: integer('trait_id')
    .notNull()
    .references(() => traitsTable.id),
  subRaceId: integer('sub_race_id')
    .notNull()
    .references(() => subRaceTable.id),
});

export const traitsToCharacterTable = pgTable('traits_to_character_table', {
  traitId: integer('trait_id')
    .notNull()
    .references(() => traitsTable.id),
  characterId: integer('character_id')
    .notNull()
    .references(() => charactersTable.id),
});

export const traitsRelations = relations(traitsTable, ({ many }) => ({
  traitsToRace: many(traitsToRaceTable),
  traitsToSubRace: many(traitsToSubRaceTable),
  traitsToCharacter: many(traitsToCharacterTable),
}));

export const traitsToRaceRelations = relations(
  traitsToRaceTable,
  ({ one }) => ({
    trait: one(traitsTable, {
      fields: [traitsToRaceTable.traitId],
      references: [traitsTable.id],
    }),
    race: one(racesTable, {
      fields: [traitsToRaceTable.raceId],
      references: [racesTable.id],
    }),
  })
);

export const traitsToSubRaceRelations = relations(
  traitsToSubRaceTable,
  ({ one }) => ({
    trait: one(traitsTable, {
      fields: [traitsToSubRaceTable.traitId],
      references: [traitsTable.id],
    }),
    subRace: one(subRaceTable, {
      fields: [traitsToSubRaceTable.subRaceId],
      references: [subRaceTable.id],
    }),
  })
);

export const traitsToCharacterRelations = relations(
  traitsToCharacterTable,
  ({ one }) => ({
    trait: one(traitsTable, {
      fields: [traitsToCharacterTable.traitId],
      references: [traitsTable.id],
    }),
    character: one(charactersTable, {
      fields: [traitsToCharacterTable.characterId],
      references: [charactersTable.id],
    }),
  })
);

export type InsertTrait = typeof traitsTable.$inferInsert;
export type SelectTrait = typeof traitsTable.$inferSelect;

export type InsertTraitToRace = typeof traitsToRaceTable.$inferInsert;
export type SelectTraitToRace = typeof traitsToRaceTable.$inferSelect;

export type InsertTraitToSubRace = typeof traitsToSubRaceTable.$inferInsert;
export type SelectTraitToSubRace = typeof traitsToSubRaceTable.$inferSelect;

export type InsertTraitToCharacter = typeof traitsToCharacterTable.$inferInsert;
export type SelectTraitToCharacter = typeof traitsToCharacterTable.$inferSelect;
