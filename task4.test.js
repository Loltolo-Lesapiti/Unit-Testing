const capitalize = require('./task4.js');

test('Capitalize first letter of the name', () => {

  expect(capitalize("petro")).toBe('Petro');
})