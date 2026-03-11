import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const g = globalThis as unknown as {
  drizzleGlobal: ReturnType<typeof createClient>;
};

const createClient = () => drizzle(process.env.TEMPLATE_DATABASE_URL as string, { schema });

export const templateDb = g.drizzleGlobal ?? createClient();

if (process.env.NODE_ENV !== "production") {
  g.drizzleGlobal = templateDb;
}

export const db = templateDb;
