DROP TABLE IF EXISTS "parcels" CASCADE;

CREATE TABLE "parcels"(
  "parcel_id" serial UNIQUE NOT NULL,
  "value" FLOAT(8) NOT NULL,
  "name" VARCHAR(30) UNIQUE NOT NULL,
  "date" DATE NOT NULL,
  "payed_at"  DATE

  -- project_id FOREIGN KEY
);