import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  earlyAccess: true,
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    async adapter() {
      const { PrismaBetterSqlite3 } = await import("@prisma/adapter-better-sqlite3");
      return new PrismaBetterSqlite3({ url: "file:prisma/dev.db" });
    },
    seed: "npx tsx prisma/seed.ts",
  },
  datasource: {
    url: "file:prisma/dev.db",
  },
});
