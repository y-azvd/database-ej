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
  ('14370290102', '160149410', 'Yudi Azevedo', 'azvd@empjunior.com', 1),
  ('04266610108', '161142480', 'Eduardo Zaiatz', 'edu@empjunior.com', 2)
;
