const { Client } = require('pg')

const connectionString = 
  process.env.DATABASE_URL || 
  'postgres://postgres:docker@localhost:5432/mecajun'

module.exports = new Client({
  connectionString
})