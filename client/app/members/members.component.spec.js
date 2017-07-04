'use strict';

describe('Component: MembersComponent', function() {
  // load the controller's module
  beforeEach(module('members'));

  var MembersComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MembersComponent = $componentController('members', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
