import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dogs from './models/dogs.js'

const app = express()


app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
}) 

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

app.get('/cats/fact', (req, res) => {
    fetch(process.env.CAT_URL)
    .then(response => response.json())
    .then(data => res.json(data.fact))
    .catch(error => console.error('Error fetching', error))
})