var express = require('express');
var router = express.Router();
var eateriesCtrl = require('../controllers/eateries')
router.get('/', eateriesCtrl.index)
router.get('/:id', eateriesCtrl.show)


module.exports = router;

// router.get('/', function(req, res, next) {
//   res.render('eateries/list');
// });

// router.get('/3226', function(req, res, next) {
//   res.render('eateries/3226');
// });

// router.get('/5475', function(req, res, next) {
//   res.render('eateries/5475');
// });

// router.get('/9567', function(req, res, next) {
//   res.render('eateries/9567');
// });