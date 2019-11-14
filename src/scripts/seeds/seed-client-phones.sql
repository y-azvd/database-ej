-- apagar todas as linha da tabela
-- esse comando também reseta a contagem da coluna id
DELETE FROM "client_phones";

INSERT INTO "client_phones"("client_id", "phone")
VALUES 
  (1, '9090 8179 0000'),
  (1, '9090 8179 0110'),
  (2, '61 9109 7110'),
  (2, '61 9109 7110'),
  (3, '55 61 9109 9111')
;

