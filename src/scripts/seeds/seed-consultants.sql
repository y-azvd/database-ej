DELETE FROM "consultants"; -- apagar todas as linha da tabela

DO $$
	declare id_negocios INTEGER;
	declare id_marketing INTEGER;
	declare id_operacoes INTEGER;
	declare id_inovacao INTEGER;

BEGIN
	SELECT "directorship_id" from "directorships" WHERE "name" = 'Negócios'
	INTO id_negocios;
	SELECT "directorship_id" from "directorships" WHERE "name" = 'Marketing'
	INTO id_marketing;
	SELECT "directorship_id" from "directorships" WHERE "name" = 'Operações'
	INTO id_operacoes;
	
	INSERT INTO "consultants" ("cpf", "directorship_id")
	VALUES
	('04266610108', id_negocios),
	('04266610198', id_negocios),
	('04266010198', id_marketing),
	('04266010178', id_marketing),
	('05266610190', id_negocios),
	('05266610170', id_negocios),
	('03268615110', id_operacoes),
	('03268615190', id_operacoes),
	('03268615191', id_operacoes),
	('01268615111', id_operacoes),
	('03918615110', id_operacoes),
	('03918615119', id_operacoes),
	('03918615123', id_negocios),
	('03268615113', id_operacoes),
	('04266010179', id_negocios),
	('04369015140', id_operacoes),
	('01268615113', id_operacoes),
	('04366610109', id_operacoes),
	('04366610110', id_operacoes),
	('04266610197', id_negocios)
;
END $$;

