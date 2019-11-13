DELETE FROM "clients" CASCADE; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "clients"
  ("client_id", "name", "email")
VALUES 
  ('1', 'Eduardo Ferreira', 'dudufer@gmail.com'),
  ('2', 'Fernando', 'fernando@gmail.com'),
  ('3', 'Edmundo Ribeiro', 'edmundo@gmail.com'),
  ('4', 'Guilherme Castro', 'gui@gmail.com'),
  ('5', 'Ricardo Ito', 'ric_ito@gmail.com'),
  ('6', 'Vitório', 'vitorio@dentista.com'),
  ('7', 'Parente', 'familiar@valete.com'),
  ('8', 'Angela Merkel', 'kekel@alemanha.gm'),
  ('9', 'Cara do Yoga', 'cara@yoga.com'),
  ('10', 'Tlein', 'tlein@gmail.com'),
  ('11', 'Thiago', 'thiago@gmail.com'),
  ('12', 'Cícaro', 'jud@gmail.com')
;
