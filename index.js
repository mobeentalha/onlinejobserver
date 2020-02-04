const express              = require('express')
const { json, urlencoded } = require('body-parser')
const app                  = express()
const models               = require('./models')
const cors                 = require('cors')
const PORT                 = process.env.PORT || 1000

const { getAllUsers }   = require('./controllers/user')

app.use(json())
app.use(cors())
app.use(urlencoded({ extended: true }))

models.sequelize.sync();

app.get('/users', getAllUsers)

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})