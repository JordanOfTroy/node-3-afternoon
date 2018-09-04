require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      checkForSession = require('./middleware/checkForSession'),
      swagCtrl = require('../server/controllers/swag_controller')
      authCtrl = require('../server/controllers/auth_controller')

const app = express()

let {SESSION_SECRET, SERVER_PORT} = process.env

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(checkForSession)

/******************************************************** */
app.get('/api/swag', swagCtrl.read)
app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.post('/api/signout', authCtrl.signOut)
app.get('/api/user', authCtrl.getUser)

/******************************************************** */








app.listen(SERVER_PORT, () => {
  console.log(`You're listening to ${SERVER_PORT}_AM Radio!`)
})

