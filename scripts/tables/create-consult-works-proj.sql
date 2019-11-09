DROP TABLE IF EXISTS "consultant_works_project" CASCADE;

CREATE TABLE "consultant_works_project"(
  -- chaves estrangeiras
  "cpf" CHAR (11) NOT NULL,
  "project_id" INTEGER NOT NULL
);
 