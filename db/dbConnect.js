require('dotenv').config({path: './.env'})
const mongoose = require('mongoose')

const DB = process.env.CONNECTION_URI

const dbConnect = mongoose.connect(DB)

module.exports = dbConnect
