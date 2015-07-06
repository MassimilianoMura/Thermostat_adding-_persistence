describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has temperature value', function() {

    it('and start/default is 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('you can increase the temp', function() {
      Thermostat.prototype.increaseTemperature()
      expect(thermostat.temperature).toEqual(21)
    });

    it('you can decrease the temp', function() {
      Thermostat.prototype.temperature = 30;
      Thermostat.prototype.decreaseTemperature()
      expect(thermostat.temperature).toEqual(29)
    });

  });

});