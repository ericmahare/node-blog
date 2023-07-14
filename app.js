require('dotenv').config({path: './.env'})
const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')
const blockRoutes = require('./routes/blog')
const dbConnect = require('./db/dbConnect')
const validateMiddleWare = require('./middlewares/validateMiddleWare')
// Listen to server request
const app = express()
// middlewares
app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(blockRoutes)
app.use("/posts/new", validateMiddleWare)
app.use(fileUpload())
// start server
const PORT = process.env.PORT

const start = async () => {
  try {
    await dbConnect
    app.listen(PORT, console.log(`Listening to port ${PORT}`))
  } catch(err) {
    console.log(err)
  }
}

start()
