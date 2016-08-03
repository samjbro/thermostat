'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_POWERSAVE_ON = 25;
  this.MAXIMUM_TEMPERATURE_POWERSAVE_OFF = 32;
  this.PowerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  };
  this.temperature ++ ;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  };
  this.temperature -- ;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return (this.temperature === this.MINIMUM_TEMPERATURE);
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.PowerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.PowerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.PowerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn()) {
    return (this.temperature === this.MAXIMUM_TEMPERATURE_POWERSAVE_ON);
  };
  return (this.temperature === this.MAXIMUM_TEMPERATURE_POWERSAVE_OFF);
};
