import { defineConfig } from 'drizzle-kit'
import { env } from './src/env.ts'

export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/*.ts', // Corrected path: removed the extra dot and adjusted the wildcard
  out: './src/db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL
  }
})