# Apenas com docker

### criar imagem redirecionando diretório
`docker run --name nome_db -e POSTGRES_PASSWORD=docker "$PWD"/:/opt/demo -p 5432:5432 -d postgres:11`

### acessar shell
`docker exec -it nome_db bash`

### semear db
`docker exec -it nome_db psql -U postgres -f /opt/demo/restore.sql`

### acessar banco de dados diretamente
`docker exec -it database psql -U postgres`