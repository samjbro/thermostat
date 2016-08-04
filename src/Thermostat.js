'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MAX_TEMP_PSM_ON = 25;
  this.MINIMUM_TEMPERATURE = 10;
  this.LOW_USAGE = 18
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature
};
Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerSavingMode
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSavingMode = true;

};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSavingMode = false;
};


Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingOn() === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
};


Thermostat.prototype.up = function () {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};


Thermostat.prototype.down = function () {
  if(this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.LOW_USAGE) {
    return 'low-usage';
  }
  else if(this.temperature >= this.LOW_USAGE && this.temperature <= this.MAX_TEMP_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
};
