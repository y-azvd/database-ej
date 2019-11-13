DROP TABLE IF EXISTS "managers" CASCADE;

CREATE TABLE "managers"(
  -- chaves estrangeiras
  "cpf" CHAR (11) PRIMARY KEY NOT NULL,
  -- tem como colocar alguma restrição pra ser apenas de inovação?
  "directorship_id" INTEGER NOT NULL
);