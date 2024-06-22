import getenv from 'getenv';

export const config = getenv.multi({
  NODE_ENV: ['NODE_ENV', 'development'],
  PORT: ['PORT', 3000, 'int'],
  DB_URL: ['DB_URL', 'string'],
});
