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
    const client = request.body

    var results = await db.query(
      `INSERT INTO "clients" ("client_id", "name", "email")
      VALUES (default, $1,  $2) 
      RETURNING "client_id";`, 
      [client.name, client.email]
    )

    const client_id = results.rows[0].client_id
    
    if (client.phones) {
      let i;
      let phonesQuery = `INSERT INTO "client_phones" ("client_id", "phone") VALUES\n`
      let phones = client.phones

      for (i = 0; i < phones.length-1; i++) {
        phonesQuery += (`(${client_id},'${phones[i]}'),\n`)        
      }

      phonesQuery += (`('${client_id}','${phones[i]}');`)
      
      console.log(phonesQuery)
      await db.query(phonesQuery)
    }

    return response.json(results)
  }
}

module.exports = ClientController
