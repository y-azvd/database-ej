DELETE FROM "roles"; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "roles" ("name")
VALUES 
  ('Diretor'),
  ('Consultor'),
  ('Gerente de Projetos'),
  ('Presidente Institucional'),
  ('Presidente Organizacional')
;
