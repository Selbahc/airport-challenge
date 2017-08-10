var AirportFlow = require('./airport.js');

describe('AirportFlow', function() {
  var flow;

  beforeEach(function() {
    flow = new AirportFlow();
  });

  it("instruct and confirm landing", function() {
    flow.plane('01020304', 'nice', 'paris');
    flow.landingAirport('cdg', 'paris');
    expect(flow.okToLand()).toEqual(`The plane is OK to land in ${flow.name} airport`);
  });
});
