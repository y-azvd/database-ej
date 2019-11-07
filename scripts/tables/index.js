/**
 * Módulo do Nodejs que lê arquivos.
 */
const fs = require('fs')

/**
 * Importar banco de dados já conectado
 */
const db = require('../../database')

create()


async function create() {
  await createTables()
  await alterTables()
  db.close()
}


async function createTables() {
  console.log('creating tables')
  /**
   * Vai ler todos os arquivos nesse 
   * diretório e guardar apenas
   * os que começam com `create-`. 
   */
  const sqlScripts = fs
    .readdirSync(__dirname)
    .filter(script => 
      script.startsWith('create-')
    )
  
  /**
   * Pra cada arquivo, pegue o conteúdo,
   * transforme-o em string e faça a query
   * pro banco de dados
   */
  for (let i = 0; i < sqlScripts.length; i++) {
    const script = sqlScripts[i]
    
    console.log(script)
    const query = fs
      .readFileSync(`${__dirname}/${script}`)
      .toString()
    
    await db.query(query)
    console.log('- done')
  }

  console.log('creating tables done')
}


async function alterTables() {
  console.log('altering tables')
  const scriptName = 'alter-table.sql'
  
  const query = fs
  .readFileSync(`${__dirname}/${scriptName}`)
  .toString()
  
  await db.query(query)
  console.log('altering tables done')
}

