describe("AirportChallenge", function() {
  let airport;
  let plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  })

  it("plane can land at airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("plane can take off the airport", function() {
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it("plane cannot take off if the weather is stormy", function() {
    plane.land(airport);
    airport.weather();
    plane.takeOff(airport);
    if (airport._weather == 'stormy') {
      expect(airport.planes()).toContain(plane);
    } else if (airport._weather == 'sunny') {
      expect(airport.planes()).not.toContain(plane);
    }
  });

  it("plane cannot land if the weather is stormy", function() {
    plane.takeOff(airport);
    airport.weather();
    plane.land(airport)
    if (airport._weather == 'stormy') {
      expect(airport.planes()).not.toContain(plane);
    } else if (airport._weather == 'sunny') {
      expect(airport.planes()).toContain(plane);
    }
  });

  it("plane cannot land if airport is full", function() {
    plane.land(airport);
    expect(airport._planes.length).not.toBeGreaterThan(airport.capacity);
  })
})
