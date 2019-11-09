DELETE FROM "members"; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "members" (
  "cpf",
  "registration",
  "name",
  "email",
  "status_id"
)

VALUES 
  ('14370290102', '140949410', 'Yudi Azevedo', 'azvd@empjunior.com', 1),
  ('04266610108', '161142480', 'Eduardo Zaiatz', 'edu@empjunior.com', 3),
  ('04266610198', '141142480', 'Gabiel Fe', 'gab@empjunior.com', 2),
  ('04366610109', '141142580', 'Gui Caetano', 'gui@empjunior.com', 2)
;
