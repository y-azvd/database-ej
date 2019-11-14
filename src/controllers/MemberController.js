const db = require('../database')

const MemberController = {
  
  async index(request, response) {
    const results = await db.query(
      `
      SELECT
       "members"."cpf",
       "members"."registration",
       "members"."name" ,
       "members"."email",
       
       "status"."name" AS "status",
       
       "members"."birth_date",
       "members"."join_date" ,
       "members"."exit_date"
        FROM
          "members"
          INNER JOIN
          "status"
          ON "members"."status_id"="status"."status_id"
        ;
      `
      )

    return response.json(results.rows)
  },

  async create(request, response) {
    const member = request.body

    var results = await db.query(
      `INSERT INTO "members" ("cpf", 
      						  "name",
      						  "registration",
      						  "birth_date",
      						  "join_date")

       VALUES ($1, $2,  $3, $4, $5, $6)`, 
      [member.cpf, member.name, member.registration,
       member.email, member.birth_date, member.join_date]
    )

  
      return response.json(results)
  }
}


module.exports = MemberController
