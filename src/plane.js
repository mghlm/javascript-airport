'use strict';

function Plane() {}
Plane.prototype.land = function(airport) {
  airport.land(this);
};
