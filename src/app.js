require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())

const ClientController = require('./controllers/ClientController')
const MemberController = require('./controllers/MemberController')

app.get('/clients', ClientController.index)

app.post('/clients', ClientController.create)

app.get('/members', MemberController.index)
app.post('/members', MemberController.create)


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