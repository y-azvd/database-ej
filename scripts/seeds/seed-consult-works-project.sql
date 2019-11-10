DELETE FROM "consultant_works_project"; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "consultant_works_project" (
  "cpf", "project_id"
)

VALUES
  -- PROJETOS EM ANDAMENTO
  ('04266610108', 1),
  ('04266610198', 1),
  ('04266010198', 1),
  ('04266010178', 1),

  ('05266610190', 2),
  ('05266610170', 2),
  ('03268615110', 2),

  ('03268615190', 3),
  ('03268615191', 3),

  ('01268615111', 4),
  ('03918615110', 4),
  ('03918615119', 4),

  -- PROJETOS ENTREGUES
  --- Fada do Dente
  ('03918615123', 5), -- Esse não está em projeto nenhum atualmente
  ('03268615113', 5), -- Esse não está em projeto nenhum atualmente
  ('03268615190', 5), -- Está no  proj 3 atualmente 
  --- Telemetria
  ('05266610190', 9), -- Todos estão em projeto atualemnte
  ('05266610170', 9),
  ('03268615110', 9),
  -- RiHappy
  ('04369015140', 10), -- deligados/afastados
  ('01268615113', 10),
  -- BitContainer
  ('04266610108', 11), -- estão atualmente em proj
  ('04266610198', 11),
  -- Cortina
  ('01268615111', 12), -- estão atualmente em proj
  ('04266010178', 12)



  
;
