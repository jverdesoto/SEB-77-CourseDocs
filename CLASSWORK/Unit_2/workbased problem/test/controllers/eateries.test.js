const expectedEateries = require('../helpers/loadEateries.js');

const eateriesCtrl = require('../../controllers/eateries');

describe('Eateries Controller', () => {

  let mockReq, mockRes;

  beforeAll( () => {
    mockRes = { render: jest.fn() };
  })

  it('should render all eateries', () => {
    mockReq = {};

    eateriesCtrl.index(mockReq, mockRes);

    expect(mockRes.render).toHaveBeenCalledWith(
      'eateries/index', { eateries: expectedEateries }
    );
  });

  it('should render one eatery', () => {
    expectedEateries.forEach( expectedEatery => {
      mockReq = {
        params: { id: expectedEatery.id }
      };

      eateriesCtrl.show(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith(
        'eateries/show', { eatery: expectedEatery }
      );
    });
  });

});
