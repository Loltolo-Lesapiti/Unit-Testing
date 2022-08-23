const stringLength = require('./task1');

test('Test string length', () => {
  expect(stringLength("Petro")).toBe(5);
});

test('Test string length', () => {
  expect(()=>{stringLength("Petro Loltolo")}).toThrow(new Error('The name is too long'));
});