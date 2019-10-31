/**
 * Módulo do Nodejs que lê arquivos.
 */
const fs = require('fs')

/**
 * Importar as configurações do banco de dados
 * e guardar em `pool`.
 */
const pool = require('../../config/database');


pool.connect()
  .then(async (error, client, done) => {
    createTables()
  })
  .catch(error => {
    console.log(error)
  })
  .finally(async () => {
    /**
     * Desconectar do banco de dados
     */
    await pool.end()
  })
  

async function createTables() {
    /**
   * Vai ler todos os arquivos nesse 
   * diretório e guardar apenas
   * os que terminam com `.sql`. 
   */
  const sqlScripts = fs
    .readdirSync(__dirname)
    .filter(script => 
      script.endsWith('.sql')
    )


  /**
   * Pra cada arquivo, pegue o conteúdo
   * transforme em string e faça a query
   * pro banco de dados
   */
  sqlScripts.forEach(async (script) => {
    // scriptName é melhor
    console.log('>', script)
    const query = fs
      .readFileSync(`${__dirname}/${script}`)
      .toString()
    console.log('\t... done\n')
    await pool.query(query)
  })

  console.log('tables creation finished')
  await pool.end()
}


