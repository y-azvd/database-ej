DROP TABLE IF EXISTS "consult_works_proj" CASCADE;

CREATE TABLE "consult_works_proj"(
  "cpf" CHAR (11)  PRIMARY KEY NOT NULL,
  "project_id" INTEGER NOT NULL,

  -- indicar chave estrangira. Refencia a tabela membros no atributo cpf
  FOREIGN KEY ("cpf") REFERENCES "members"("cpf"),
  FOREIGN KEY ("project_id") REFERENCES "projects"("project_id")
);