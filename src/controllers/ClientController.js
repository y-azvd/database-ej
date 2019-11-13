const db = require('../database')

const ClientController = {
  async index(request, response) {
    const results = await db.query(
      `
      SELECT
        "clients"."name",
        "clients"."email",
        "phone"
        
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
  },

  async create(request, response) {
    console.log(request.body.email)    
    return response.json(request.body)
  }
}


module.exports = ClientController
