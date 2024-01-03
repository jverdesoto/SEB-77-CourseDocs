const expectedEateries = require('../helpers/loadEateries.js');

const Eatery = require('../../models/eatery');

describe('Eatery Model', () => {

  it('should retrieve all eateries', () =>
    expect(Eatery.getAll()).toEqual(expectedEateries)
  );

  it('should retrieve one eatery', () => {
    expectedEateries.forEach(expectedEatery =>
      expect(Eatery.getOne(expectedEatery.id)).toEqual(expectedEatery)
    )
  });

});
