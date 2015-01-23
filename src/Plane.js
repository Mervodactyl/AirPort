var Plane = function() {
  this.flying = false;
  this.occupied = false;
  // this.explode = false;
};

Plane.prototype.takeOff = function() {
  this.flying = true;
};

Plane.prototype.land = function() {
  this.flying = false;
};

Plane.prototype.boarded = function() {
  this.occupied = true;
};
