var express = require('express');
var router = express.Router();

var eateriesCtrl = require('../controllers/eateries');

router.get('/', eateriesCtrl.index);
router.get('/:id', eateriesCtrl.show);

module.exports = router;
