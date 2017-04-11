'use strict'; // Mode to ensure good testing

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

    it('land planes', function() {
    airport.land(plane);
    expect(airport.airplanes).toContain(plane);
  });
});
