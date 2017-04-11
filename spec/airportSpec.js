describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('initialize', function() {
    it('with empty array', function() {
      expect(airport.airplanes).toEqual([]);
    });
  });
});
