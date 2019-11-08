DELETE FROM "client_phones"; -- apagar todas as linha da tabela
                       -- esse comando também reseta a contagem da coluna id

INSERT INTO "client_phones"("client_id", "phone")
VALUES 
  (1, '9090 8179 0000')
;
