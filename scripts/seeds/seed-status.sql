DELETE FROM "status"; -- apagar todas as linha da tabela

INSERT INTO "status" ("name")
VALUES 
  ('Ativo'),
  ('Desligado'),
  ('Afastado')
;
