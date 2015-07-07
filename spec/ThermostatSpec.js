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
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(21)
    });

    it('you can decrease the temp', function() {
      thermostat.temperature = 30;
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(29)
    });

    it('minimum temperature is 10 degrees', function () {
      thermostat.temperature = 11;
      thermostat.decreaseTemperature()
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('has power save mode', function() {

    it('which has maximum temperature of 25 degrees when on', function() {
      thermostat.temperature = 24;
      thermostat.increaseTemperature()
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(25);
    });

    it('which has maximum temperature of 32 degrees when off', function() {
      thermostat.changePowerSaveMode()
      thermostat.temperature = 31;
      thermostat.increaseTemperature()
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(32);
    });

  });

    it('can reset the temperature to 20 degrees', function() {
    thermostat.resetTemperature()
    expect(thermostat.temperature).toEqual(20);
  });


});