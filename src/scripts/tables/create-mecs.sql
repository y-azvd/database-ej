-- Membro Em Cargo Semestre

DROP TABLE IF EXISTS "member_role_semester" CASCADE;

CREATE TABLE "member_role_semester"(
  "semester" DATE PRIMARY KEY NOT NULL,

  -- chaves estrangeiras
  "cpf" CHAR (11) NOT NULL,
  "role_id" INTEGER
);