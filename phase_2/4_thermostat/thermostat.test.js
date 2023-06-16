const Thermostat = require('./thermostat');

it('Thermostat initializes with temperature 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
});
  