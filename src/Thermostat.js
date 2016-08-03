'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature ++ ;
};

Thermostat.prototype.down = function() {
  if(this.temperature > this.minimumTemperature){
    this.temperature -- ;
  };
};