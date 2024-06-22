import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { config } from '../config/config';

const client = postgres(config.DB_URL!);
export const db = drizzle(client);
