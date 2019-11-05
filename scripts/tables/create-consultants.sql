DROP TABLE IF EXISTS "consultants" CASCADE;

CREATE TABLE "consultants"(
  -- chaves estrangeiras
  "cpf" CHAR (11) NOT NULL,
  "directorship_id" INTEGER NOT NULL
);