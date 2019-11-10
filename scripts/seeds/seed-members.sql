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
  -- DIRETORES
  ('04269015140', '150758482', 'Luan Rosé', 'lu_rosé@empjunior.com', 1),
  ('04369015139', '160758482', 'Enzo Caladrares', 'enxo@empjunior.com', 1),
  ('04266615199', '130152482', 'Bruno Dakota', 'dakota@empjunior.com', 1),
  ('04369015140', '170758482', 'Carolina Sartori', 'carol@empjunior.com', 2),
  ('04369015141', '171758482', 'Lucca JP-BR', 'lucca@empjunior.com', 1),
  ('04269615110', '120152482', 'Gustavo Ioguercio', 'iogue@empjunior.com', 1),

  -- GERENTES
  ('16370290102', '160949410', 'Yudi Azevedo', 'azvd@empjunior.com', 1),
  ('19370290101', '190949410', 'Lizângela', 'liz@empjunior.com', 1),
  ('19370290103', '190949419', 'David Chaterlad', 'david@empjunior.com', 1),
  ('12370290103', '120949410', 'Victor Gabariel', 'vic@empjunior.com', 1),

  -- CONSULTORES NORMAIS
  ('04269015141', '161758482', 'Mathew Brave', 'brave@empjunior.com', 1),
  ('04266610108', '161142480', 'Eduardo Zaiatz', 'edu@empjunior.com', 3),
  ('04266610198', '141142480', 'Gabiel Fe', 'gab@empjunior.com', 2),
  ('05266610190', '151142480', 'Maria Leão', 'maria@empjunior.com', 1),
  ('05266610170', '131142481', 'Lemos', 'lemos@empjunior.com', 3),
  ('03268615110', '151192482', 'Guilherme Fastru', 'guifas@empjunior.com', 1),
  ('03268615113', '151192480', 'Frenatinho', 'fren@empjunior.com', 1),
  ('03268615190', '151192410', 'Fernanda', 'fern@empjunior.com', 1),
  ('03268615191', '141192310', 'Leonardo', 'leo@empjunior.com', 1),
  ('01268615113', '141192480', 'Karou Fartory', 'karou@empjunior.com', 2),
  ('01268615111', '141092480', 'Mary Clear', 'mary@empjunior.com', 1),
  ('03918615110', '451192482', 'Richard Guito', 'guito@empjunior.com', 1),
  ('03918615119', '351192482', 'Arthur', 'art@empjunior.com', 1),
  ('03918615123', '123192482', 'Sabraina', 'sabr@empjunior.com', 1),
  ('04366610109', '141142580', 'Gui Caetano', 'gui@empjunior.com', 2)
;
