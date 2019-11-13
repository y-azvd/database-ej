DROP TABLE IF EXISTS "directorships" CASCADE;

CREATE TABLE "directorships"(
  "directorship_id" serial PRIMARY KEY UNIQUE NOT NULL,
  "name" VARCHAR(20) NOT NULL
);