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

    const cpf_in_use_response = await db.query(
      `
          SELECT 
            "cpf"
          FROM
            "members"
          WHERE 
            "cpf"=$1

      `,[member.cpf]
    )

    if(cpf_in_use_response.rows[0]){
      return response.status(400).json({error: 'CPF already in use'})
    }

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
  },

  async update(request, response) {
     const member = request.body

     const result = await db.query(
      `
      SELECT * FROM "members" WHERE"cpf"='${member.cpf}'
      `
     )


     if(!result.rows[0]){
        return response.status(404).json({error: 'Member not found'})
     }

     const cpf = result.rows[0].cpf

     var q = "UPDATE members SET "
     for( var prop in member){
      if( member[prop] != null)
        q += prop +" = '"+ member[prop]+"',"
     }
     q = q.slice(0,-1)
     q += " WHERE cpf = '"+cpf+"'"

     // console.log(q)
     await db.query(q)


     return response.json({ok: 'true'})
     
  },

  async delete (request, response) {
     const cpf = request.params.cpf

     const result = await db.query(
      `
      SELECT
      *
      FROM
        "members"
      WHERE
        "cpf"='${cpf}'
      `
     )


     if(!result.rows[0]){
        return response.status(404).json({error: 'Member not found'})
     }
     
     await db.query(
      `
      DELETE FROM
      "members"
      WHERE
       "cpf"='${cpf}'
      `
      )

    return response.json({ok: 'true'})

  }
}

module.exports = MemberController
