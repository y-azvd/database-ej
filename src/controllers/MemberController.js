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

    const results_status_id = await db.query(
      `SELECT 
        "status"."status_id"
        FROM
        "status"
        WHERE
        "status"."name"= $1

      `,[member.status]
    )
    const status_id = results_status_id.rows[0].status_id
    console.log(status_id)

    var results = await db.query(
      `INSERT INTO "members" ("cpf", 
      						  "name",
      						  "registration",
                    "email",
      						  "birth_date",
      						  "join_date",
                    "status_id")

       VALUES ($1, $2,  $3, $4, $5, $6, $7)`, 
      [member.cpf, member.name, member.registration,
       member.email, member.birth_date, member.join_date,
       status_id]
    )

  
      return response.json(results)
  }
}


module.exports = MemberController
