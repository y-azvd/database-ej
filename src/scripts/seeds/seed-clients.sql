DELETE FROM "clients" CASCADE; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "clients"
  ("name", "email")
VALUES 
  ('Eduardo Ferreira', 'dudufer@gmail.com'),
  ('Fernando', 'fernando@gmail.com'),
  ('Edmundo Ribeiro', 'edmundo@gmail.com'),
  ('Guilherme Castro', 'gui@gmail.com'),
  ('Ricardo Ito', 'ric_ito@gmail.com'),
  ('Vitório', 'vitorio@dentista.com'),
  ('Parente', 'familiar@valete.com'),
  ('Angela Merkel', 'kekel@alemanha.gm'),
  ('Cara do Yoga', 'cara@yoga.com'),
  ('Tlein', 'tlein@gmail.com'),
  ('Thiago', 'thiago@gmail.com'),
  ('Cícaro', 'jud@gmail.com')
;
