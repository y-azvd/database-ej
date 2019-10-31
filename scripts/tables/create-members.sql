CREATE TABLE members(
  id_membro serial PRIMARY KEY,
  cpf CHAR (11) UNIQUE NOT NULL,
  nome VARCHAR (50) NOT NULL,
  email CHAR (11) UNIQUE NOT NULL,
  data_nasc DATE
);