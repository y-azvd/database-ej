DELETE FROM "managers"; -- apagar todas as linha da tabela

INSERT INTO "managers" ("cpf", "directorship_id")
VALUES
  ('16370290102', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Inovação')),
  ('19370290101', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Inovação')),
  ('19370290103', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Inovação')),
  ('12370290103', (SELECT "directorship_id" from "directorships" WHERE "name" = 'Inovação'))
;
