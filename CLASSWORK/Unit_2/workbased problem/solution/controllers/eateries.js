module.exports = {
  index,
  show
};

const Eatery = require('../models/eatery');

function index(req, res) {
  const eateries = Eatery.getAll();

  res.render('eateries/index', { eateries });
}

function show(req, res) {
  const eatery = Eatery.getOne(req.params.id);

  res.render('eateries/show', { eatery });
}
