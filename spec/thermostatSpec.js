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
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature with up button', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('checks power-saving mode is on', function() {
    thermostat.powerSavingOn();
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('can switch powe-saving mode off', function() {
    thermostat.powerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('can switch powe-saving mode back on', function() {
    thermostat.powerSavingOff();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.powerSavingOn();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  describe('When power-saving mode is ON', function() {
    it('maximum temperature is 25', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('When power-saving mode is OFF', function() {
    it('maximum temperature is 32', function() {
      thermostat.powerSavingOff();
      for(var i = 0; i < 13; i++ ) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('Reset button:', function() {
    it('resets the maximum power to 25', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('displaying usage levels', function(){

    describe('when the temperature is below 18 degrees', function(){
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function(){
      it('it is considered medium-usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function(){
      it('it is considered high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });

  });
});
