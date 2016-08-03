$(document).ready(function(){

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=bcebb95329f7ace43020439afcb4e214&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.EnergyUsage());
  };
});
