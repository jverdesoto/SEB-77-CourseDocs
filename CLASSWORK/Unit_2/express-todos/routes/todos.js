var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// all actual paths start with todos

// get request /todos
router.get('/', todosCtrl.index);
// GET /todos/:id
router.get('/:id', todosCtrl.show)

module.exports = router;
