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
    const client = request.body

    var results = await db.query(
      `INSERT INTO "directors" ("cpf", "directorship_id")
      VALUES ($1,  $2) `, [client.cpf, client.directorship_id] )

    return response.json(results)
  },
  
  async delete(request, response) {
    return response.json({ok: 'lets delete it'})
  }
}

module.exports = DirectorController
