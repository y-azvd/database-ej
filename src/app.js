const express = require('express')

const app = express()

app.use(express.json())

const ClientController = require('./controllers/ClientController')
const MemberController = require('./controllers/MemberController')
const ProjectController = require('./controllers/ProjectController')
const DirectorController = require('./controllers/DirectorController')


app.get('/clients', ClientController.index)
app.post('/clients', ClientController.create)
app.put('/clients/:id', ClientController.update)
app.delete('/clients/:id', ClientController.delete)

app.get('/members', MemberController.index)
app.post('/members', MemberController.create)
app.post('/members/update', MemberController.update)
app.delete('/members/:cpf', MemberController.delete)

app.get('/projects',ProjectController.index)
app.post('/projects', ProjectController.create)
app.put('/projects', ProjectController.update)
app.delete('/projects',ProjectController.delete)

app.get('/directors', DirectorController.index)
app.post('/directors', DirectorController.create)


app.listen(3000, () => {
  console.log('app listening on PORT 3000')
})
