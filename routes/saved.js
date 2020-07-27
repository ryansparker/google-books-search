const express = require('express')
const { Router } = require('express')
const mongoose = require('mongoose')

const router = express.Router()

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true },
    () => console.log('connected to DB!'))

const db = mongoose.connection;
console.log("hahahhaa")
db.on('error', console.error.bind(console, 'connection error:'));

//we need to wait for database to connect before a request is made
db.once("open", () => {

    const BookSchema = mongoose.Schema({
        id: String,
      });
console.log("hhoooho")
    const Book = mongoose.model('Book', BookSchema, 'books');
    
    router.post('/', (req, res) => {
        const bookID = req.body.id
        console.log("heehehe")
        
        const book1 = new Book({ id:bookID});
 
        // save model to database
        book1.save(function (err, book) {
          if (err) return console.error(err);
          console.log(book.id + " saved to book collection.");
        });

        res.status(200).send('ok it worked')

    })
})

module.exports = router