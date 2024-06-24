import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { config } from '../config/config';
import * as characterSchema from './schemas/characters';
import * as classSchema from './schemas/class';
import * as raceSchema from './schemas/races';
import * as userSchema from './schemas/users';
import * as traitSchema from './schemas/traits';
import * as spellSchema from './schemas/spells';
import * as spellToClassSchema from './schemas/spellsToClass';

const connectionString = config.DB_URL;

const client = postgres(connectionString);
export const db = drizzle(client, {
  schema: {
    ...characterSchema,
    ...classSchema,
    ...raceSchema,
    ...userSchema,
    ...traitSchema,
    ...spellSchema,
    ...spellToClassSchema,
  },
});
