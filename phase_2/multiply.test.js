const multiply = require('./multiply');

describe('multiply', () => {
    it('multiplies 2 and 3', () => {
      const result = multiply(2, 3);
      expect(result).toBe(6);
    });
});