thermostat = new Thermostat

var buttons = $(".controller_button");


$('#display').html(thermostat.temperature);
// VANILLA JAVASCRIPT:
// document.getElementById("display").innerHTML = temperature

// $(buttons[0]).click(thermostat.increaseTemperature());

var increase = function (e) {
  e.preventDefault();
  thermostat.increaseTemperature();
  $('#display').html(thermostat.temperature);
}

var decrease = function (e) {
  e.preventDefault();
  thermostat.decreaseTemperature();
  $('#display').html(thermostat.temperature);
}

var powerSave = function (e) {
  e.preventDefault();
  thermostat.changePowerSaveMode();
}

var reset = function (e) {
  e.preventDefault();
  thermostat.resetTemperature();
  $('#display').html(thermostat.temperature);
}

$(buttons[0]).click(increase);
$(buttons[1]).click(decrease);
$(buttons[2]).click(powerSave);
$(buttons[3]).click(reset);
