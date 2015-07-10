thermostat = new Thermostat

thermostat.temperature = $('#display').text()


var buttons = $(".controller_button");
var name = $('#city').text();
var weatherBackground;


var updateTemperature =  function () {
$.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + name + '&units=metric',
function (data) {
  $('#temp').html(data.list[0].main.temp)
  $('#city').html(data.list[0].name)
  weatherBackground = data.list[0].weather[0].main
  background();
  $.post( '/', { city: name });
});
};

var background = function () {
  $('body').removeClass();
  $('body').addClass(weatherBackground);
};

updateTemperature();


$('#chose_a_city').click(function(){
  name = $('#chosen_city').val();
  updateTemperature();
});


var increase = function (e) {
  e.preventDefault();
  thermostat.increaseTemperature();
  thermostatUpdate();
};

var decrease = function (e) {
  e.preventDefault();
  thermostat.decreaseTemperature();
  thermostatUpdate();
};

var powerSave = function () {
  thermostat.changePowerSaveMode();
};

var reset = function (e) {
  e.preventDefault();
  thermostat.resetTemperature();
  thermostatUpdate();
};


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

var thermostatUpdate = function() {
  $('#display').html(thermostat.temperature + ' °C');
  $.post( '/', { sessiontemp: thermostat.temperature });
  color();
};

thermostatUpdate();

$('#powerSaveCheckBox').change(function() {
  powerSave();
});


$(buttons[0]).click(increase);
$(buttons[1]).click(decrease);
$(buttons[2]).click(reset);


var lati;
var longi;
var local;

function nav(callback) { navigator.geolocation.getCurrentPosition(function(position) {
      lati = position.coords.latitude;
      longi = position.coords.longitude;
      callback();
    });
};


function localUpdate() {
  nav(getTemperatureCoord);
};

function getTemperatureCoord () {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + longi, function (data) {
        local = data.name;
    });
};

localUpdate();


