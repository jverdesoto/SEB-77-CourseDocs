import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 5000 

app.listen(port,() => {
    console.log(`listening on port: ${port}`)
})

mongoose.connect(process.env.DATABASE_URL)

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    from: String,
})

const bookSchema = new mongoose.Schema({
    title: String,
    year: Number,
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author'
     },
})

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    }
})

//models start with capital more convenient
const Author  = mongoose.model('Author', authorSchema)
const Book = mongoose.model('Book', bookSchema)
const User = mongoose.model('User', userSchema)


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Library'
    })
})

app.get('/authors', async(req, res) => {
    const allAuthors = await Author.find({})
    res.json(allAuthors)
})

app.post('/authors/add',(req, res) => {
    const author = req.body
    const newAuthor = new Author({
        name: author.name,
        from: author.from,
        age: parseInt(author.age),

    })
    newAuthor.save()
    .then(() => {
        console.log('Author saved')
        res.sendStatus(200)
    })
    .catch(err => console.error(err))
})

app.get('/books', async(req, res) => {
    const allBooks = await Book.find({}).populate('author')
    res.json(allBooks)
})

app.post('/books/add', async (req, res) => {
    if( await Author.countDocuments({"name": req.body.author}) === 0) {
        const newAuthor = new Author({name: req.body.author})
        newAuthor.save()
        .then(() => {
            addBook(req.body.author)
        })
    }
    else {
        addBook(req.body.author)
    }

    async function addBook(reqAuthor) {
        const author = await  Author.findOne({"name": reqAuthor})
        const book = new Book({
            title: req.body.title,
            author: author,
            year: parseInt(req.body.year)
        })
        book.save()
        .then(() => {
            res.sendStatus(200)
        })

    }
    
})

app.get('/authors/:id', async(req, res) => {
    const author = await Author.findById(req.params.id)
    res.json(author)
})
app.get('/books/:id', async(req, res) => {
    const book = await Book.findById(req.params.id).populate('author')
    res.json(book)
})

app.put('/authors/:id', (req, res) => {
    Author.updateOne({"_id": req.params.id}, {name: req.body.name, from: req.body.from, age: req.body.age})
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)
    })
})

app.put('/books/:id', async (req, res) => {
    if ( await  Author.countDocuments({"name": req.body.author}) === 0) {
        const newAuthor = new Author({name: req.body.author})
        newAuthor.save()
        .then(() => {
            updateBook()
        })
    } else {
        updateBook()
    }

    async function updateBook(){
        console.log(req.body)
        const author= await Author.findOne({"name": req.body.author})
        console.log(req.params.id);
        Book.updateOne({"_id": req.params.id}, {title: req.body.title, year: req.body.year, author: author})

        .then(() => {
            res.sendStatus(200)
        })
        .catch(() => {
            res.sendStatus(500)
        })
    }
})
// app.put('/books/:id', (req, res) => {
//     Book.updateOne({"_id": req.params.id}, {title: req.body.title, year: req.body.year, Author: req.body.author})
//     .then(() => {
//         res.sendStatus(200)
//     })
//     .catch(err => {
//         res.sendStatus(500)
//     })
// })

app.delete('/books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    // Book.deleteOne({"_id": req.params.id})
    .then(() => {
        res.sendStatus(200)
    })
    .catch( err => {
        res.sendStatus(500)
    })
})

//for promises you "return" chain promises

app.delete('/authors/:id', (req, res) => {
        Author.findByIdAndDelete(req.params.id)
    .then(() => {
        return Book.deleteMany({"author": req.params.id})
    })
    .then(() => {
        res.sendStatus(200)
    })
    .catch( err => {
        res.sendStatus(500)
    })
})

app.post('/user/login', async (req, res) => {
    const now = new Date()

    // create a new user if it doesnt exist
    if ( await User.countDocuments({"userEmail": req.body.userEmail}) === 0 ) {
        const newUser = new User({
            lastLogin: now
        })
        newUser.save()
        .then(() => {
            res.sendStatus(200)
        })
        .catch( err => {
            res.sendStatus(500)
        })
    } else {
        //existing user
        await User.findOneAndUpdate({"userEmail": req.body.userEmail}, {lastLogin: now})
        res.sendStatus(200)
    } 
})




