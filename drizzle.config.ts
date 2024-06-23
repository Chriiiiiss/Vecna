import { defineConfig } from 'drizzle-kit';
import { config } from './src/config/config';

const schemas = [
  './src/db/schemas/users.ts',
  './src/db/schemas/spells.ts',
  './src/db/schemas/class.ts',
  './src/db/schemas/spellsToClass.ts',
  './src/db/schemas/characters.ts',
];

export default defineConfig({
  schema: schemas,
  out: './src/db/supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: { url: config.DB_URL },
});
