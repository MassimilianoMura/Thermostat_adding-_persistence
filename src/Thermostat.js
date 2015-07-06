var Thermostat = function () {};

Thermostat.prototype.temperature = 20;

Thermostat.prototype.increaseTemperature = function() {
  Thermostat.prototype.temperature++
  console.log(Thermostat.prototype.temperature)
};

Thermostat.prototype.decreaseTemperature = function() {
  if (Thermostat.prototype.temperature > 10) {
    Thermostat.prototype.temperature--
    console.log(Thermostat.prototype.temperature)
  }
};