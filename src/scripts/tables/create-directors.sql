DROP TABLE IF EXISTS "directors" CASCADE;

CREATE TABLE "directors"(
  -- chaves estrangeiras
  "cpf" CHAR (11) NOT NULL,
  -- tem como colocar alguma restrição pra ser apenas de inovação?
  "directorship_id" INTEGER NOT NULL
);