// Requirements
const express = require('express')
const path = require('path')
const boardgamesDB = require('./data/boardgamesDB')

// Express App
const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Mount routes
app.get('/', function(req, res) {
    const boardgames = boardgamesDB.getAll()
    res.render('home', { boardgames })
})

app.get('/:id', function(req, res) {
    res.render('moreinfo/index', {boardgame: boardgamesDB.getOne(req.params.id)})
})

app.listen(3000, function() {
    console.log('Listening on port 3000');
})