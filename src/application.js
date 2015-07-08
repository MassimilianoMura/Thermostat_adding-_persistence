thermostat = new Thermostat

var buttons = $(".controller_button");


$('#display').html(thermostat.temperature + ' °C');

var increase = function (e) {
  e.preventDefault();
  thermostat.increaseTemperature();
  color();
  $('#display').html(thermostat.temperature + ' °C');
}

var decrease = function (e) {
  e.preventDefault();
  thermostat.decreaseTemperature();
  color();
  $('#display').html(thermostat.temperature + ' °C');
}

var powerSave = function () {
  thermostat.changePowerSaveMode();
}

var reset = function (e) {
  e.preventDefault();
  thermostat.resetTemperature();
  color();
  $('#display').html(thermostat.temperature + ' °C');
}

var color = function () {
  var checkTemperature = thermostat.temperature
  if (checkTemperature <18){
    $('#display').removeClass();
    $('#display').addClass('green');
   } else if (checkTemperature >17 && checkTemperature <25){
    $('#display').removeClass();
    $('#display').addClass('yellow')
   } else {
    $('#display').removeClass();
    $('#display').addClass('red')
   }
}

$('#powerSaveCheckBox').change(function() {
  powerSave();
});


$(buttons[0]).click(increase);
$(buttons[1]).click(decrease);
$(buttons[2]).click(reset);


