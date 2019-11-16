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
    let results = await db.query(
      `SELECT * FROM clients
      WHERE client_id = '${request.params.id}'`
    )
    
    if (!results.rows[0]) {
      return response.status(404).json({error: 'Member not found'})
    }

    const client = results.rows[0]
    console.log(client)

    /**
     * checar se o email já está sendo usado
     */
    results = await db.query(
      `SELECT email FROM clients
      WHERE email = '${request.body.email}'`
    )

    if (results.rows[0]) {
      return response.status(400).json({error: 'Email already in use'})
    }

    /**
     * Se deu tudo certo até aqui, atualize as informações
     * do membro.
     */
    await db.query(
      `UPDATE clients
      SET
        name = '${request.body.name}',
        email = '${request.body.email}'
      WHERE
        client_id = '${client.client_id}';`
    )

    /**
     * Apagar telefones e escrever os novos
     */
    if (request.body.phones.length > 0) {
      await db.query(
        `DELETE FROM client_phones
        WHERE client_id = '${client.client_id}';`
      )

      let i;
      let phonesQuery = `INSERT INTO "client_phones" ("client_id", "phone") VALUES\n`
      let phones = request.body.phones

      for (i = 0; i < phones.length-1; i++) {
        phonesQuery += (`(${client.client_id},'${phones[i]}'),\n`)        
      }

      phonesQuery += (`('${client.client_id}','${phones[i]}') `)
      phonesQuery += 'RETURNING phone;'
      results = await db.query(phonesQuery)
    }
    
    /**
     * Enxertar telefones no cliente
     */
    client.phones = results.rows.map(obj => obj.phone)
    
    /**
     * O retorno nem sempre vai ter os números de telefone.
     * Ainda não sei consertar isso.
     */
    return response.json(client)
  },

  async delete(request, response) {
    return response.json({ok: 'lets delete it'})
  }
}

module.exports = ClientController
