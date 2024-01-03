const Eatery = require('../models/eatery')

module.exports = {
    index,
    show
}

function show(req, res) {
    res.render('eateries/show', {
        eatery: Eatery.getOne(req.params.id)
    })
}

function index(req, res) {
    res.render('eateries/index', {
      eateries: Eatery.getAll()
    });
  }