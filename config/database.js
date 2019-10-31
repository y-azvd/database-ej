const { Pool } = require('pg')

const connectionString = 
  process.env.DATABASE_URL || 
  'postgres://postgres:docker@localhost:5432/dvdrental'

module.exports = new Pool({
  connectionString
})