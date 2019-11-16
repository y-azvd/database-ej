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
  },

  async update(request, response) {
    /**
     * - checar se membro existe
     * - checar se email já é utlizado
     * - sobrescrever infos
     * - apagar todos os telefones do cliente
     * - escrever os novos
     */
    let results = await db.query(
      `SELECT * FROM clients
      WHERE client_id = '${request.params.id}'`
    )
    
    if (!results.rows[0]) {
      return response.status(404).json({error: 'Member not found'})
    }

    const client = results.rows[0]

    console.log(client)
    results = await db.query(
      `SELECT email FROM clients
      WHERE email = '${request.body.email}'`
    )

    // apagar telefones do cliente

    if (results.rows[0]) {
      return response.status(400).json({error: 'Email already in use'})
    }

    client.phones = results.rows.map(obj => obj.phone)
    
    console.log(results.rows)
    
    return response.json(client)
  }
}

module.exports = ClientController
