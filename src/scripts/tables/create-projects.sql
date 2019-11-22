DROP TABLE IF EXISTS "projects" CASCADE;

CREATE TABLE "projects"(
  "project_id" serial PRIMARY KEY UNIQUE NOT NULL,
  "name" VARCHAR(30) UNIQUE NOT NULL,
  "started_at" DATE NOT NULL,
  "delivery_at" DATE,
  "delivered_at"  DATE,
  "link_drive" TEXT NOT NULL,
  "difficulty" INTEGER NOT NULL CHECK (1 <= difficulty AND difficulty <= 5),
  "revenue" FLOAT(8) NOT NULL,
  "price" FLOAT(8) NOT NULL,
  "nps" INTEGER,

  -- chaves estrangeiras
  "client_id" INTEGER,
  "manager_cpf" CHAR (11)
);