const pool = require('./config/database')

const getSomeActors = async () => {
  const results = await pool.query(`SELECT * FROM actor LIMIT 4;`)

  console.log(results.rows)
  pool.end()
}

getSomeActors()
