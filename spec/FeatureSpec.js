'use strict'; // Mode to ensure good testing

describe('Feature test', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

    it('planes can land', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
