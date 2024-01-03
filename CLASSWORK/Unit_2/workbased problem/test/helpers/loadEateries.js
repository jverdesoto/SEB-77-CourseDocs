const rewire = require('rewire');

// Using rewire in order to gain access to the "private" eateries constant
const Eatery = rewire('../../models/eatery');
const eateries = Eatery.__get__('eateries');

module.exports = eateries;
