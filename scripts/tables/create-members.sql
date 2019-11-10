DROP TABLE IF EXISTS "members" CASCADE;

CREATE TABLE "members"(
  "cpf" CHAR (11)  PRIMARY KEY NOT NULL,
  "registration" CHAR (10) UNIQUE NOT NULL,
  "name" VARCHAR (50) NOT NULL,
  "email" VARCHAR (50) UNIQUE NOT NULL,
  "birth_date" DATE,
  "join_date" DATE,
  "exit_date" DATE,

  -- chaves estrangeiras
  "status_id" INTEGER NOT NULL
);