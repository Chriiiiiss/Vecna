import { defineConfig } from 'drizzle-kit';
import { config } from './src/config/config';

export default defineConfig({
  schema: ['./src/db/schemas/users.ts'],
  out: './src/db/supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: { url: config.DB_URL },
});
