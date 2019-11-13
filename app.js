const express = require('express')

const db = require('./database')

const app = express()

app.get('/', (request, response) => {
  return response.send('go to /clients')
})


app.get('/clients', async (request, response) => {
  const results =  await db.query('SELECT * FROM clients LIMIT 10;')
  return response.json(results.rows)
})


app.get('/clients/phones', async (request, response) => {
  const results = await db.query(
  `
    SELECT
      "phone",
      "clients"."name"
    
    FROM
      "client_phones"
        JOIN
      "clients"
    
    ON
      "client_phones"."client_id" = "clients"."client_id"
    ;
  `
  )

  return response.json(results.rows)
})


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
  // const results = await db.query(
  //   `
  //   SELECT 
  //     members."name" AS member_name,
  //     members.*, 
  //     directorships.*

  //   FROM
  //     "members"
  //       JOIN
  //     SELECT 
  //   ;
  //   `
  // )

  const results = await db.query(
    `
    SELECT 
      *
    FROM
      consultants
        INNER JOIN
      directorships
    
      ON 
        consultants.directorship_id = directorships.directorship_id
    ;
    `
  )

  return response.json(results.rows)
})


app.listen(3000, () => {
  console.log('app listening on PORT 3000')
})