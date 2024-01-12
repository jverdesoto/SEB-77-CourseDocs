import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

mongoose.connect(process.env.DATABASE_URL)

const bookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,

})

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema) 

const Author = mongoose.model('Author', authorSchema)

const User = mongoose.model('User', userSchema)


app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Library!"
    })
})

app.get('/books', async (req, res) => {
    const books = await Book.find({}).sort('author').populate('author')
    res.json(books)
})

app.get('/authors', async (req, res) => {
    const authors = await Author.find({}).sort('lastName')
    res.json(authors)
})

app.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id).populate('author')
    res.json(book)
})

app.get('/authors/:id', async (req, res) => {
    const author = await Author.findById(req.params.id)
    res.json(author)
})

app.post('/books/add', async (req, res) => {
    const {name, authorFirstName, authorLastName} = req.body

    try {
        let author = await Author.findOne({
            firstName: authorFirstName,
            lastName: authorLastName
        })

        if (!author) {
            author = new Author({
                firstName: authorFirstName,
                lastName: authorLastName
            })
            await author.save()
        }

        const newBook = new Book({
            name: name,
            author: author._id
        })
        
        await newBook.save()
        console.log(`new book, ${name}, added`);
        res.sendStatus(200)

    } catch(error) {
        
        console.error(error)

    } 
})

app.post('/authors/add', (req, res) => {
    const author = req.body
    const newAuthor = new Author ({
        firstName: author.firstName,
        lastName: author.lastName
    })

    newAuthor.save()

    .then(() => {
        console.log(`new author, ${author.firstName} ${author.lastName}, added`);
        res.sendStatus(200)
    })
    .catch(error => console.error(error))
})

app.put('/books/:id', async (req, res) => {
    try {
        const {name, authorFirstName, authorLastName} = req.body

        let author = await Author.findOne({
            firstName: authorFirstName,
            lastName: authorLastName
        })

        if (!author) {
            author = new Author({
                firstName: authorFirstName,
                lastName: authorLastName
            })
            await author.save()
        }
        await Book.updateOne({"_id": req.params.id}, {name, author: author._id})
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
})

app.put('/authors/:id', async (req, res) => {
    try {
        await Author.updateOne({"_id": req.params.id}, {firstName: req.body.firstName, lastName: req.body.lastName})
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
})

app.delete('/books/:id', async (req, res) => {
    try {
        await Book.deleteOne({"_id": req.params.id})
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
})

app.delete('/authors/:id', async (req, res) => {
    try {
        await Book.deleteMany({"author": req.params.id})
        await Author.deleteOne({"_id": req.params.id})
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
})

app.post('/user/login', async (req, res) => {
    try {
        const now = new Date()

        if( await User.countDocuments({'userEmail': req.body.userEmail}) === 0 ) {
            const newUser = new User({
                userEmail: req.body.userEmail,
                lastLogin: now
            })
            newUser.save()

            res.sendStatus(200)
        
        } else {
            await User.findOneAndUpdate({'userEmail': req.body.userEmail}, {lastLogin: now})
            res.sendStatus(200)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})