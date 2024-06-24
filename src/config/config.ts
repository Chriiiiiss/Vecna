import getenv from 'getenv';
import 'dotenv/config';

export const config = getenv.multi({
  NODE_ENV: ['NODE_ENV', 'development', 'string'],
  PORT: ['PORT', 3000, 'int'],
  DB_URL: ['DB_URL', 'xxx', 'string'],
});
