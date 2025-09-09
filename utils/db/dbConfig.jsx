// ...existing code...
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// load .env in non-production (safe for local dev)
if (!process.env.DATABASE_URL && process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config();
}

function normalizeDatabaseUrl(raw) {
  if (!raw) return raw;
  // remove leading "psql " if present, then strip surrounding quotes
  let v = raw.replace(/^\s*psql\s+/i, "").trim();
  v = v.replace(/^['"]|['"]$/g, "");
  return v;
}

const rawUrl = process.env.DATABASE_URL;
if (!rawUrl) {
  throw new Error(
    "DATABASE_URL is not set. Add it to your environment or .env file."
  );
}

const connectionString = normalizeDatabaseUrl(rawUrl);

const sql = neon(connectionString);
export const db = drizzle(sql, { schema }); 