require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session')

const app = express()

let {SESSION_SECRET, SERVER_PORT} = process.env

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))







app.listen(SERVER_PORT, () => {
  console.log(`You're listening to ${SERVER_PORT}_FM Radio!`)
})

