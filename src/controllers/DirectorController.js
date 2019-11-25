const db = require('../database')

const DirectorController = {
  async index(request, response) {    //Listar diretores
    const results = await db.query(
      `
      SELECT
        "members"."name"
        
        FROM
          "directors"
            INNER JOIN "members" ON "directors"."cpf" = "members"."cpf"
        ;
      `
      )

    return response.json(results.rows)
  },

  async create(request, response) {
    const director = request.body

    var check1 = await db.query(
      `select * 
        from "members" 
        where "members"."cpf"='${director.cpf}'`)
  
    if(!check1.rows[0]){
      return response.status(404).json({error: 'Member not found'})
    }

    var check2 = await db.query(
    `select exists(
      select "directors"."directorship_id" 
      from "directors" 
      where "directors"."directorship_id"=${director.directorship_id})`)

    if(!check2){
      return response.status(404).json({error: 'Director already exists'})
    }
    else{      
      var results = await db.query(
        `INSERT INTO "directors" ("cpf", "directorship_id")
        VALUES ($1,  $2) `, [director.cpf, director.directorship_id] )

      return response.json({ok: 'Created'})
    }
  },


  async update(request, response) {
    const director = request.body

    var check1 = await db.query(
      `select * 
        from "members" 
        where "members"."cpf"='${director.cpf}'`)
  
    if(!check1.rows[0]){
      return response.status(404).json({error: 'Member not found'})
    }    
    
    var check2 = await db.query(
      `select * 
        from "directors" 
        where "directors"."directorship_id"='${request.params.id}'`)
  
    if(!check2.rows[0]){
      return response.status(404).json({error: 'Directorship not found'})
    }      

    var result2 = await db.query(
      `UPDATE directors
      SET
        cpf = '${request.body.cpf}'
      WHERE
        directorship_id = '${request.params.id}';`
    )
    return response.json({ok: 'Updated'})
  },

  async delete(request, response) {
    const director_cpf = request.params.cpf

    const result = await db.query(
      `DELETE FROM directors WHERE "directors"."cpf"='${director_cpf}';`
    )

    //console.log(result)

    return response.json({ok: 'deleted'})
  }
}

module.exports = DirectorController
