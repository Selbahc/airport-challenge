let Airport = function() {
  this._planes = [];
  this._weather = undefined;
  this.capacity = 1;
}

Airport.prototype.planes = function() {
  return this._planes;
}

Airport.prototype.clearForLanding = function(plane) {
  this._planes.push(plane);
}

Airport.prototype.clearToTakeOff = function(plane) {
  // this._planes.shift(plane);
  var planeIndex = this._planes.indexOf(plane);
  this._planes.splice(planeIndex, 1);
}

Airport.prototype.weather = function() {
  var random = Math.round(Math.random() * 10);
  random <= 8 ? this._weather = 'sunny' : this._weather = 'stormy';
}
