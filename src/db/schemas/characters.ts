import {
  char,
  integer,
  pgTable,
  serial,
  text,
  varchar,
} from 'drizzle-orm/pg-core';
import { usersTable } from './users';
import { classTable } from './class';
import { relations } from 'drizzle-orm';

export const charactersTable = pgTable('characters_table', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    .notNull()
    .references(() => usersTable.id),
  FOR: integer('for').notNull(),
  DEX: integer('dex').notNull(),
  CHA: integer('cha').notNull(),
  SAG: integer('sag').notNull(),
  CONS: integer('cons').notNull(),
  INT: integer('int').notNull(),
  name: varchar('name').notNull(),
  lastName: varchar('last_name').notNull(),
  raceId: integer('race_id').notNull(),
  classId: integer('class_id').notNull(),
  age: integer('age').notNull(),
  alignment: text('alignment', {
    enum: [
      'Lawful good',
      'Neutral good',
      'Chaotic good',
      'Lawful neutral',
      'Neutral',
      'Chaotic neutral',
      'Lawful evil',
      'Neutral evil',
      'Chaotic evil',
    ],
  }).notNull(),
  health: integer('health').notNull(),
  maxHealth: integer('max_health').notNull(),
  armorClass: integer('armor_class').notNull(),
  diceHealth: char('dice_health', { length: 3 }).notNull(),
  level: integer('level').notNull(),
});

export const charactersRelations = relations(charactersTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [charactersTable.user_id],
    references: [usersTable.id],
  }),
  class: one(classTable, {
    fields: [charactersTable.classId],
    references: [classTable.id],
  }),
}));

export type InsertCharacter = typeof charactersTable.$inferInsert;
export type SelectCharacter = typeof charactersTable.$inferSelect;
