const path = require("path");
const express = require('express');
const ejs = require('ejs')
// Listen to server request
const app = express()
// middlewares
app.use(express.static('./public'))
app.set('view engine', 'ejs')
// Home page
app.get('/',(req, res) => {
  res.status(200).render('index')
})

// About page
app.get('/about', (req, res) => {
  res.status(200).render('about')
})

// contact page
app.get('/contact', (req, res) => {
  res.status(200).render('contact')
})

// post route 
app.get('/post', (req, res) => {
  res.status(200).render('post')
})

// 404 page
app.get('*',(req, res) => {
  res.status(404).render('404')
})

// start server
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Listening to port ${PORT}`))
