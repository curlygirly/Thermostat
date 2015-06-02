function Thermostat() {

  this.temperature = 20;
  this.powersavemode = "on";

};

  Thermostat.prototype.change = function(number) {
    this.temperature = this.temperature + number;
    this.ifLessThanTen();
    this.ifPSOnAndTempOver25();
    this.ifPSOffAndTempOver32();
    return(this.temperature);

  };

  Thermostat.prototype.up = function() {
    this.change(1)
  };

  Thermostat.prototype.down = function() {
    this.change(-1)
  };

  Thermostat.prototype.ifLessThanTen = function() {
    if (this.temperature < 10) {
      this.temperature = 10;
    };
  };

  Thermostat.prototype.ifPSOnAndTempOver25 = function() {
    if ((this.powersavemode === "on") && (this.temperature > 25)) {
      this.temperature = 25;
    };
  };

  Thermostat.prototype.ifPSOffAndTempOver32 = function() {
    if((this.powersavemode === "off") && (this.temperature > 32)) {
      this.temperature = 32;
    };
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
    return(this.temperature);
  };

  Thermostat.prototype.powersave = function(argument) {
    this.powersavemode = argument;
  };


