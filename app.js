const express = require('express')

const pool = require('./config/database')

const app = express()

app.get('/actors', async (request, response) => {
  const results = await pool.query('SELECT * FROM actor LIMIT 10;')
  return response.json(results.rows)
})

app.listen(3000, () => {
  console.log('app listening on PORT 3000')
})