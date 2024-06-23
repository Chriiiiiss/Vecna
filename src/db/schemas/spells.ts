import { relations } from 'drizzle-orm';
import { pgTable, serial, integer, char, text } from 'drizzle-orm/pg-core';
import { spellToClassTable } from './spellsToClass';

export const spellsTable = pgTable('spells_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  level: integer('level').notNull(),
  description: text('description').notNull(),
  range: integer('range').notNull(),
  components: text('components', { enum: ['V', 'S', 'M'] }).notNull(), // V = Verbal, S = Somatic, M = Material TODO: Should be an array
  duration: text('duration').notNull(),
  casting_time: text('casting_time').notNull(),
  school: text('school', {
    enum: [
      'Abjuration',
      'Divination',
      'Echantement',
      'Evocation',
      'Illusion',
      'Necromancy',
      'Transmutation',
    ],
  }).notNull(),
  diceDamage: char('dice_damage', { length: 3 }).notNull(),
});

export const spellsRelations = relations(spellsTable, ({ many }) => ({
  spellToClass: many(spellToClassTable),
}));

export type InsertSpell = typeof spellsTable.$inferInsert;
export type SelectSpell = typeof spellsTable.$inferSelect;
