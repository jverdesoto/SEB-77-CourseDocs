const ejs = require('ejs');

const expectedEateries = require('../../helpers/loadEateries.js');

describe('Eateries Index View', () => {

  it('should render the index template', async () => {
    const doc = document.createElement('html');
    doc.innerHTML = await ejs.renderFile(
      './views/eateries/index.ejs',
      { eateries: expectedEateries }
    );

    const links = doc.querySelectorAll('main > ul > li > a');

    links.forEach( (link, i) =>
      expect(link.innerHTML).toContain(expectedEateries[i].name)
    );

  });

});
