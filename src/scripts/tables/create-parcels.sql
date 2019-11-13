DROP TABLE IF EXISTS "parcels" CASCADE;

CREATE TABLE "parcels"(
  "parcel_id" serial PRIMARY KEY UNIQUE NOT NULL,
  "value" FLOAT(8) NOT NULL,
  "date" DATE NOT NULL,
  "payed_at"  DATE,

  -- chaves estrangeiras
  "project_id" INTEGER NOT NULL
);