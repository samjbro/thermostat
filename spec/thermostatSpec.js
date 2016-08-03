'use strict';

describe('Thermostat' , function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature using up button', function() {
    thermostat.increasesTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature with up button', function() {
    thermostat.decreasesTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.decreasesTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

});
