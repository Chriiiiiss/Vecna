import { integer, pgTable } from 'drizzle-orm/pg-core';
import { spellsTable } from './spells';
import { classTable } from './class';
import { relations } from 'drizzle-orm';

export const spellToClassTable = pgTable('spell_to_class_table', {
  spellId: integer('spell_id')
    .notNull()
    .references(() => spellsTable.id),
  classId: integer('class_id')
    .notNull()
    .references(() => classTable.id),
});

export const spellToClassRelations = relations(
  spellToClassTable,
  ({ one }) => ({
    spell: one(spellsTable, {
      fields: [spellToClassTable.spellId],
      references: [spellsTable.id],
    }),
    class: one(classTable, {
      fields: [spellToClassTable.classId],
      references: [classTable.id],
    }),
  })
);

export type InsertSpellToClass = typeof spellToClassTable.$inferInsert;
export type SelectSpellToClass = typeof spellToClassTable.$inferSelect;
