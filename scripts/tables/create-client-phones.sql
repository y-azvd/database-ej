DROP TABLE IF EXISTS "client_phones" CASCADE;

CREATE TABLE "client_phones"(
  -- client_id é PK e FK, faz sentido?
  "client_id" INTEGER PRIMARY KEY NOT NULL UNIQUE,
  "phone" CHAR (20) NOT NULL
);