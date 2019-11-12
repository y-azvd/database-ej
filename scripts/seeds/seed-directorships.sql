DELETE FROM "directorships"; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "directorships" (
  "directorship_id", "name"
)
VALUES 
  (1, 'Negócios'),
  (2, 'Operações'),
  (3, 'Marketing'),
  (4, 'Inovação')
;
