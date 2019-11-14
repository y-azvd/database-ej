DROP TABLE IF EXISTS "extra_costs" CASCADE;

CREATE TABLE "extra_costs"(
  "cost_id" serial PRIMARY KEY UNIQUE NOT NULL,
  "value" FLOAT(8) NOT NULL,
  "description" TEXT NOT NULL,
  -- "payed_at"  DATE,

  -- chaves estrangeiras
  "project_id" INTEGER NOT NULL
);