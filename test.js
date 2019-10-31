const pool = require('./config/database')

const getSomeActors = async () => {
  // const results = await pool.query('SELECT * FROM actor LIMIT 10;')
  const results = await pool.query({
    text: `SELECT * FROM actor WHERE actor_id=$1;`,
    values: [6]
  })

  console.log(results.rows)
  pool.end()
}

getSomeActors()


