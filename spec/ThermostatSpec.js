describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has temperature value', function() {

    it('and start/default is 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('you can increase the temp with the up button', function() {
      Thermostat.prototype.increaseTemperaure()
      expect(thermostat.temperature).toEqual(21)
    });

  });

});