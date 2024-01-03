const express = require('express')
const path = require('path')

const playerDb = require('./data/players-db')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', function(req, res) {
    res.redirect('/players')
})

app.get('/players', function(req, res) {
    const players = playerDb.getAll()
    res.render('players/index', { players })
})

app.listen(3000, function() {
    console.log('Listening on port 3000')
})
