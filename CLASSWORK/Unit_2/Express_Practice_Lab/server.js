// load express
const express = require('express')
const path = require('path')

// require student database
const studentDB = require('./students');

// create express application
const app = express();


// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Mount routes
app.get('/', function(req, res) {
    res.redirect('/students')
});


app.get('/students', function(req, res){
    const students = studentDB.getAll()
    res.render('students/index', { students })
});

app.listen(4000, function() {
    console.log('Listending on port 4000')
})