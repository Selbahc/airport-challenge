let Plane = function() {
  this.land = function(airport) {
    if (airport._weather != 'stormy') {
      airport.clearForLanding(this);
    }
  }

  this.takeOff = function(airport) {
    if (airport._weather != 'stormy') {
      airport.clearToTakeOff(this);
    }
  }
}
