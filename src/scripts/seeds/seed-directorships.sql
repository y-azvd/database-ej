DELETE FROM "directorships"; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "directorships" ("name")
VALUES 
  ('Negócios'),
  ('Operações'),
  ('Marketing'),
  ('Inovação')
;
