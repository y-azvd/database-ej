const db = require('../database')

const ClientController = {
  async index (request, response) {
    const results =  await db.query('SELECT * FROM clients LIMIT 10;')
    return response.json(results.rows)
  },

  async clientPhones(request, response) {
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
  }
}


module.exports = ClientController
