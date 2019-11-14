/**
 * Módulo do Nodejs que lê arquivos.
 */
const fs = require('fs')

/**
 * Importar banco de dados já conectado
 */
const db = require('../../database')

/**
 * A ordem do processo de população importa, 
 * por isso deve adicionar primeiro as entidades
 * e relacionamentos que não possuem chave 
 * estrangeira.
 * 
 * Desse jeito, pra cada arquivo seed-nomda-databela.sql
 * deve-se adicionar, na ordem adequada, esse 
 * nome no seguinte array.
 */
const sqlScripts = [
  'seed-status.sql',
  'seed-clients.sql',
  'seed-client-phones.sql',
  'seed-members.sql',
  'seed-directorships.sql',
  'seed-managers.sql',
  'seed-projects.sql',
  'seed-roles.sql',
  'seed-directors.sql',
  'seed-consult-works-project.sql',
  'seed-consultants.sql',
]

seedTables()
  .catch(error => {
    console.log('É VEI, DEU ERRO AÍ. DÁ UM JEITO')
    console.log(error)
    console.log(error.detail)
    process.exit(-1)
  })


async function seedTables() {
  /**
   * Pra cada arquivo, pegue o conteúdo
   * transforme em string e faça a query
   * pro banco de dados
   */
  for(let i = 0; i < sqlScripts.length; i++) {
    const script = sqlScripts[i]
    const query = fs
      .readFileSync(`${__dirname}/${script}`)
      .toString()
    console.log(script)
    await db.query(query)
  }

  console.log('- tables seeding finished')
  db.close()
}

