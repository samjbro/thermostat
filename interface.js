$(document).ready(function(){

  var thermostat = new Thermostat;

  function updateCurrentTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $("#increase-temp").click(function() {
    thermostat.up();
    updateCurrentTemp();
  });

  $("#decrease-temp").click(function() {
    thermostat.down();
    updateCurrentTemp();
  });

  $("#reset-temp").click(function() {
    thermostat.reset();
    updateCurrentTemp();
  });

  $("#psm-on").click(function() {
    thermostat.powerSavingOn();
    $("#power-saving-status").text("on");
  });

  $("#psm-off").click(function() {
    thermostat.powerSavingOff();
    $("#power-saving-status").text("off");
  });


});
