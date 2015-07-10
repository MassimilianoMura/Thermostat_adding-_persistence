var Thermostat = function () {
  this.temperature = 20
};


Thermostat.prototype.powerSave = true;


Thermostat.prototype.increaseTemperature = function() {

  if (Thermostat.prototype.powerSave == true) {
    if (this.temperature <= 24) {
      this.temperature++
    };
  };

  if (Thermostat.prototype.powerSave == false) {
    if (this.temperature <= 31) {
      this.temperature++
    };
  };

  console.log(this.temperature)
};


Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    this.temperature--
    console.log(this.temperature)
  };
};


Thermostat.prototype.changePowerSaveMode = function() {

  if (Thermostat.prototype.powerSave === true) {
    return Thermostat.prototype.powerSave = false;
  } else {
    return Thermostat.prototype.powerSave = true;
  };
};


Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
  console.log(this.temperature)
};


