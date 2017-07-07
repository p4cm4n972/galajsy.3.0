'use strict';

describe('Controller: ArticlesCtrl', function() {
  // load the controller's module
  beforeEach(module('articles'));

  var ArticlesCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ArticlesCtrl = $controller('ArticlesCtrl', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
