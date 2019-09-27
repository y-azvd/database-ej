/**
 * algumas configurações:
 * https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04
 * 
 * outras orientações: STOP start ...
 * https://phoenixnap.com/kb/how-to-install-mysql-on-ubuntu-18-04
 */

const express = require('express')
const mysql = require('mysql')

const app = express()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'employees'
})

connection.connect(error => {
  if (error) {
    console.log('error connecting:', error.stack)
    return
  }

  console.log('connected as id', connection.threadId)
})


app.get('/', (req, res) => {
  connection.query('SELECT emp_no, hire_date, gender FROM employees LIMIT 2', (error, results, fields) => {
    // console.log(fields)
    fields.forEach(field => {
      console.log(field.name)
    })
    // console.log(results[0].hire_date)
    res.send('hey from root')
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})