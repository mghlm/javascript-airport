'use strict';

describe('Airport', function() {
  var airport;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane');
  });

  it('instructs plane to land', function() {
    expect(airport.land(plane)).toHaveBeenCalledWith(plane);
  });
});




  // describe('initialize', function() {
  //   it('with empty array', function() {
  //     expect(airport.airplanes).toEqual([]);
  //   });
  // });
  //
