DROP TABLE IF EXISTS "projects" CASCADE;

CREATE TABLE "projects"(
  "project_id" serial PRIMARY KEY UNIQUE NOT NULL,
  "name" VARCHAR(30) UNIQUE NOT NULL,
  "start_date" DATE NOT NULL,
  "delivered_date"  DATE,
  "link_drive" TEXT NOT NULL,
  "difficulty" INTEGER NOT NULL,
  "revenue" FLOAT(8) NOT NULL,
  "price" FLOAT(8) NOT NULL,
  "nps" INTEGER,

  -- chaves estrangeiras
  "client_id" INTEGER NOT NULL
);