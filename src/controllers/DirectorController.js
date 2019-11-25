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
  
    if(`select exists(select "directors"."directorship_id" from "directors" where "directors"."directorship_id"=${director.directorship_id})`){
      return response.status(404).json({error: 'Diretor já existe'})
    }
    else{      
      var results = await db.query(
        `INSERT INTO "directors" ("cpf", "directorship_id")
        VALUES ($1,  $2) `, [director.cpf, director.directorship_id] )

      return response.json(results)
    }
  },


  async update(request, response) {
    let results = await db.query(
      `SELECT * FROM directors
      WHERE directorship_id = '${request.params.directorship_id}'`
    )
    
    if (!results.rows[0]) {
      return response.status(404).json({error: 'Directorship not found'})
    }

    const director = results.rows[0]
    //console.log(director)

    await db.query(
      `UPDATE clients
      SET
        cpf = '${request.body.cpf}',
      WHERE
        directorship_id = '${director.directorship_id}';`
    )
    return response.json(client)
  },

  async delete(request, response) {
    const director_cpf = request.params.cpf

    const result = await db.query(
      `DELETE FROM directors WHERE "directors"."cpf"=${director_cpf};`
    )

    //console.log(result)

    return response.json({ok: 'deleted'})
  }
}

module.exports = DirectorController
