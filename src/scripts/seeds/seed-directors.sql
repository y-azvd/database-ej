DELETE FROM "directors"; -- apagar todas as linha da tabela

INSERT INTO "directors" ("cpf", "directorship_id")
VALUES
  ('04269015140', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Inovação')),
  ('04369015139', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Negócios')),
  ('04369015141', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Operações')),
  ('04269015141', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Marketing'))
;
