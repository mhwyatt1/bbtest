'use strict';

describe('Service: yahooPipe', function () {

  // load the service's module
  beforeEach(module('yapipesApp'));

  // instantiate service
  var yahooPipe;
  beforeEach(inject(function (_yahooPipe_) {
    yahooPipe = _yahooPipe_;
  }));

  it('should do something', function () {
    expect(!!yahooPipe).toBe(true);
  });

});
