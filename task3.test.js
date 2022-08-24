const Calculator = require('./task3.js');

describe('Simple calculator Operations', () => {

  describe('Addition', () => {
    test('Test1', () => {
      expect(Calculator.add(2, 1)).toBe(3);
    })
    test('Test2', () => {
      expect(Calculator.add(1, 1)).toBe(2);
    })
    test('Test3', () => {
      expect(Calculator.add(10, 5)).toBe(15);
    })
  });

  describe('Subtraction', () => {
    test('Test1', () => {
      expect(Calculator.subtract(2, 1)).toBe(1);
    })
    test('Test2', () => {
      expect(Calculator.subtract(1, 1)).toBe(0);
    })
    test('Test3', () => {
      expect(Calculator.subtract(10, 5)).toBe(15);
    })
  });

  describe('Multiplication', () => {
    test('Test1', () => {
      expect(Calculator.multiply(2, 1)).toBe(2);
    })
    test('Test2', () => {
      expect(Calculator.multiply(1, 1)).toBe(1);
    })
    test('Test3', () => {
      expect(Calculator.multiply(10, 5)).toBe(50);
    })
  });

  describe('Division', () => {
    test('Test1', () => {
      expect(Calculator.divide(2, 1)).toBe(2);
    })
    test('Test2', () => {
      expect(Calculator.divide(1, 1)).toBe(1);
    })
    test('Test3', () => {
      expect(Calculator.divide(10, 5)).toBe(2);
    })
  });

});