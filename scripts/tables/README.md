# Detalhe importante

Os arquivos `create-<nome da tabela>.sql` delcaram as colunas que serão usadas posteriormente como chaves estrangeiras.

É no arquivo `alter-table.sql` que as colunas são, de fato, transformadas em chaves estrangeiras.

Isso é para evitar o erro de referência a colunas que ainda não foram criadas durante o script de popular o banco de dados.