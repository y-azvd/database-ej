DROP TABLE IF EXISTS "members" CASCADE;

CREATE TABLE "members"(
  "cpf" CHAR (11)  PRIMARY KEY NOT NULL,
  "registration" CHAR (10) UNIQUE NOT NULL,
  "name" VARCHAR (50) NOT NULL,
  "email" CHAR (11) UNIQUE NOT NULL,
  "birth_date" DATE,
  "status_id" INTEGER NOT NULL, 
  "join_date" DATE,
  "exit_date" DATE,

  -- Não reclamou.
  FOREIGN KEY ("status_id") REFERENCES "status"("status_id")
);