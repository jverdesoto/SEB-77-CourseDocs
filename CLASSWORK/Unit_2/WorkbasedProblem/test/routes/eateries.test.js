const eateriesRoutes = require('../../routes/eateries');

describe('Eateries Routes', () => {

  it('should route the index action', () => {
    const index = eateriesRoutes.stack.find( layer =>
      layer.route.path == '/' && layer.route.methods['get']
    );
    expect(index.route.stack[0].name).toBe('index');
  });

  it('should route the show action', () => {
    const show = eateriesRoutes.stack.find( layer =>
      layer.route.path == '/:id' && layer.route.methods['get']
    );
    expect(show.route.stack[0].name).toBe('show');
  });

});
