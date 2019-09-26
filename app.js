const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hey from root')
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})