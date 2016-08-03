'use strict';

describe('Feature test: ', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases temperature with up button', function() {
    thermostat.increasesTemperature();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('decreases temperature with up button', function() {
    thermostat.decreasesTemperature();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

});
