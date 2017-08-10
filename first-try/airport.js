var AirportFlow = function() {
  this.plane = function(flightNum, origin, destination, isFlying) {
    this.flightNum = flightNum;
    this.origin = origin;
    this.destination = destination;
    this.isFlying = isFlying || true;
  }

  this.landingAirport = function(name, city, weather) {
    this.name = name;
    this.city = city;
    this.weather = weather || 'sunny';
  }

  this.okToLand = function() {
    var sameCity = this.destination == this.city ? true : false;
    var weather = this.weather == 'sunny' ? true : false;
    return sameCity && weather ? `The plane is OK to land in ${this.name} airport` : 'The plane can\'t land; please wait';
  }


};
module.exports = AirportFlow;
