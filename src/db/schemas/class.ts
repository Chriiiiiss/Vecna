import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { spellToClassTable } from './spellsToClass';
import { charactersTable } from './characters';

export const classTable = pgTable('class_table', {
  id: serial('id').primaryKey(),
  name: varchar('name', {
    enum: [
      'Barbarian',
      'Bard',
      'Cleric',
      'Druid',
      'Paladin',
      'Rogue',
      'Sorcerer',
      'Wizard',
      'Ranger',
    ],
  }).notNull(),
  description: varchar('description').notNull(),
});

export const classRelations = relations(classTable, ({ many }) => ({
  spellToClass: many(spellToClassTable),
  characters: many(charactersTable),
}));

export type InsertClass = typeof classTable.$inferInsert;
export type SelectClass = typeof classTable.$inferSelect;
