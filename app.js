require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const savedRoute = require('./routes/saved')

app.use('/saved', savedRoute)

//ROUTES
app.get('/', (req, res) => {
res.send('We are on home')
})



//How do we start listening to the server
app.listen(3000);

