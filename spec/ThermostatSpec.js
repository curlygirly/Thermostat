describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('is created at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase in temperature', function() {
    thermostat.up(1);
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease in temperature', function() {
    thermostat.down(-1);
    expect(thermostat.temperature).toEqual(19);
  });

  it('can only go as low as 10 degrees', function() {
    thermostat.change(-20);
    expect(thermostat.temperature).toEqual(10);
  });

  it('power saving mode is on by default', function() {
    expect(thermostat.powersavemode).toBe("on");
  });

  it('can only go up to 25 degrees when power saving mode is on', function() {
    thermostat.change(20);
    expect(thermostat.temperature).toEqual(25);
  });

  it('can only go up to 32 degrees when power saving mode is off', function() {
    thermostat.powersavemode = "off";
    thermostat.change(30);
    expect(thermostat.temperature).toEqual(32);
  });

  it('can be reset to 20 degrees by hitting the reset button', function() {
    thermostat.change(3);
    expect(thermostat.temperature).toEqual(23);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it ('has powersavemode which cna be on or off', function(){
      expect(thermostat.powersavemode).toBe("on");
      thermostat.powersave("off");
      expect(thermostat.powersavemode).toBe("off");
      thermostat.powersave('on');
      // thermostat.powersave is the method we call on to change powersave mode status
      expect(thermostat.powersavemode).toBe("on");
  });
});

  // it('can go no lower than 10', function(){
  //   var thermostat = new Thermostat();
  //   expect(function () {thermostat.change(-15)}).toThrow("Lowest temperature is 10");
  // });
// To throw an error need to create a proc within test by embedding a function within expectation

