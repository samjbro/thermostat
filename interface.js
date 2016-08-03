$(document).ready(function(){
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
