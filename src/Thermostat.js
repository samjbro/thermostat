'use strict';

function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.currentTemperature = function () {
  return this.temperature
};

Thermostat.prototype.increasesTemperature = function () {
  this.temperature += 1;
};

Thermostat.prototype.decreasesTemperature = function () {
  this.temperature -= 1;
};
