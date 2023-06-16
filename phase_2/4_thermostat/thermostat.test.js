const Thermostat = require('./thermostat');

it('Thermostat initializes with temperature 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
});
  
it('Increases the tempreture by 2 degrees with the up method', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(22);
});

it('Decreases the tempreture by 1 degreee with the down method when tempreture is 22', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
});

it('Increases the temperature to the maximum of 25 when Power Saving Mode is on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });
  
  