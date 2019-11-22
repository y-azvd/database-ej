const db = require('../database')

const MemberReporter = {
  async getMembersInDirectorships(request, response) {
    const results = await db.query(
      `SELECT
        "members"."name" AS "member",
        "directorships"."name" AS "directorship"
      FROM 
        "members"
          INNER JOIN 
        "consultants"
        ON
          "members"."cpf" = "consultants"."cpf" 
          INNER JOIN
        "directorships"
        ON
          "consultants"."directorship_id" = "directorships"."directorship_id"
      ORDER BY "directorships"."name", "members"."name";`
    )
  
    return response.json(results.rows)
  }
}

module.exports = MemberReporter
