const add = require('./add');

describe('add', () => {
    it('adds 2 and 2', () => {
      const result = add(2, 2);
      expect(result).toBe(4);
    });
});