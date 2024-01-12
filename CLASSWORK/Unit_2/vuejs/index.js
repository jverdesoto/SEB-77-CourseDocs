import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dogs from './models/dogs.js'
import mongoose from 'mongoose'

const app = express()


app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

mongoose.connect(process.env.DATABASE_URL)

const catSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    img: String
})

const Cat = mongoose.model('Cat', catSchema)

const Dog = mongoose.model('Dog', dogSchema)

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to MEVN'
    })
})

app.get('/dogs', (req, res) => {
    res.json(dogs)
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => (
        dog.id === id
    ))

    res.json(dog)
})

app.get('/cat', async (req, res) => {
    const cats = await Cat.find({})
    res.json(cats)
})

app.get('/cats/fact', (req, res) => {
    fetch(process.env.CAT_URL)
    .then(response => response.json())
    .then(data => res.json(data.fact))
    .catch(error => console.error('Error fetching', error))
})

app.post('/dogs/add', (req,res) => {
    const dog = req.body
    const puppy = new Dog({
        name: dog.name,
        age: parseInt(dog.age),
        breed: dog.breed,
        img: dog.img
    })

    puppy.save()

    .then(() => {
        console.log(`New cat ${dog.name}, age ${dog.age} was added to the database`);
        res.sendStatus(200)
    })
    .catch(error => console.error(error))
})

app.post('/cat/add', (req, res) => {
    const cat = req.body
r
    const kitty = new Cat({name: cat.name, age: parseInt(cat.age)})

    kitty.save()
    .then(() => {
        console.log(`New cat ${cat.name}, age ${cat.age} was added to the database`);
        res.sendStatus(200)
    })
    .catch(error => console.error(error))
})

app.get('/cat/:id', async (req, res) => {
    const cat = await Cat.findById(req.params.id)
    res.json(cat)
})

app.delete('/cat/:id', (req, res) => {
    Cat.deleteOne({"_id" : req.params.id})
    // Cat.findByIdAndDelete(req.params.id)
    .then(() => {
        res.sendStatus(200)
    })
    .catch((error) => {
        res.sendStatus(500)
    })
})

app.put('/cat/:id', (req, res) => {
    Cat.updateOne({"_id" : req.params.id}, {name: req.body.name, age: req.body.age})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((error) => {
        res.sendStatus(500)
    })
})
