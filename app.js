require('dotenv').config({ path: `.env.${process.env.NODE_ENV || "development"}`})
console.log(`Running in ${process.env.NODE_ENV || "development"}`)

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
console.log(process.env.NODE_ENV)
const savedRoute = require('./routes/saved')

app.use('/saved', savedRoute)


if (process.env.NODE_ENV === "production") {
    app.use(express.static("./build"))
}


//How do we start listening to the server
app.listen(process.env.PORT);

