const express = require('express')
const path = require('path')
const axios = require('axios')

const viewRouter = require('./routes/view')
const apiRouter = require('./routes/api')

const app = new express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.use('/', viewRouter)
app.use('/api', apiRouter)

app.listen(process.env.port || 3000, () => {
  console.log(`http://localhost:3000`)
})