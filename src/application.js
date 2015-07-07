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

$(buttons[0]).click(increase);

