var Thermostat = function () {};

Thermostat.prototype.temperature = 20;

Thermostat.prototype.increaseTemperature = function() {
  Thermostat.prototype.temperature++
};

Thermostat.prototype.decreaseTemperature = function() {
  Thermostat.prototype.temperature--
};