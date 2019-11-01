const express = require('express')

const db = require('./database')

const app = express()

app.get('/', (request, response) => {
  return response.send('go to /clients')
})

app.get('/clients', async (request, response) => {
  const results = await db.query('SELECT * FROM clients LIMIT 10;')
  return response.json(results.rows)
})

app.listen(3000, () => {
  console.log('app listening on PORT 3000')
})