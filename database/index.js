const { Pool } = require('pg')

const connectionString = 'postgres://postgres:postgres@localhost:5432/mecajun'

const pool = new Pool({ connectionString });

module.exports = {
  query: (text, params) => pool.query(text, params),
  close: () => pool.end()
}