const express = require('express')

const app = express()

app.use(express.json())

const ClientController = require('./controllers/ClientController')

app.get('/clients', ClientController.index)

app.post('/clients', ClientController.create)


app.get('/projects', async (request, response) => {
  const results = await db.query(
    `
    SELECT
      "projects"."project_id",
      "projects"."name",
      "projects"."started_at",

      "clients"."client_id" AS "client[id]",
      "clients"."name" AS "client[name]",
      "clients"."email" AS "client[email]"
    
    FROM 
      "projects"
        LEFT OUTER JOIN
      "clients"
      
    ON
      "projects"."client_id" = "clients"."client_id"
    ;
    `
  )

  return response.json(results.rows)
})

app.get('/projects/:id/members', async (request, response) => {
  const results = await db.query(
    `
    SELECT 
      "members"."name",
      "members"."cpf"
        
    FROM 
      "projects"
        INNER JOIN 
      "consultant_works_project" 
      ON 
        "projects"."project_id" = "consultant_works_project"."project_id"
      
        INNER JOIN 
      "members" 
      ON 
        "consultant_works_project"."cpf" = "members"."cpf"
    WHERE
      "projects"."project_id" = ${request.params.id} 
      ; 
    `
  )

  return response.json(results.rows)
})

app.get('/projects/expensive', async (request, response) => {
  const results = await db.query(
    `
    SELECT 
      "project_id", 
      "name",
      "revenue",
      "price",
      "revenue" - "price" AS "loss"
    
    FROM
      "projects"

    WHERE
      "revenue" < "price"
    ;
    `
  )

  return response.json(results.rows)
})

app.get('/projects/late', async (request, response) => {
  const results = await db.query(
    `
    SELECT 
      "project_id", 
      "name"
    
    FROM
      "projects"

    WHERE
      "delivery_at" < "delivered_at"
        OR 
      "delivery_at" > current_date
    ;
    `
  )

  return response.json(results.rows)
})


app.get('/members/email', async (request, response) => {
  const results = await db.query(
    `
    SELECT 
      "cpf", 
      "name",
      "email",
    
    FROM
      "members"
    ;
    `
  )

  return response.json(results.rows)
})

app.get('/members/status', async (request, response) => {
  const results = await db.query(
    `
    SELECT 
      "members"."name" AS "member_name",
      "status"."name" AS "status"

    FROM
      "members"
        JOIN
      "status"
    ON 
      "members"."status_id" = "status"."status_id"
    ;
    `
    )

  return response.json(results.rows);

});


app.get('/members/directorships', async (request, response) => {
  const results = await db.query(
    `
    SELECT
      "members"."name" AS "member_name",
      "direc_name"
    FROM 
      "members"
        INNER JOIN 
      (
        SELECT 
        "consultants"."cpf",
        "directorships"."name" AS "direc_name"
        
        FROM
          "consultants"
            INNER JOIN
          directorships

        ON 
          "consultants"."directorship_id" = "directorships"."directorship_id"
      ) AS "direcs_and_cpfs" 

    ON
      "members"."cpf" = "direcs_and_cpfs"."cpf"
    ;
    `
  )

  return response.json(results.rows)
})


app.listen(3000, () => {
  console.log('app listening on PORT 3000')
})