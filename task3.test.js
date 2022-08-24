const Calculator = require('./task3.js');

const test1=new Calculator(2,1);
const test2=new Calculator(1, 1);
const test3=new Calculator(10, 5);

describe('Simple calculator Operations', () => {

  describe('Addition', () => {
    test('Test1', () => {
      expect(test1.add()).toBe(3);
    })
    test('Test2', () => {
      expect(test2.add()).toBe(2);
    })
    test('Test3', () => {
      expect(test3.add()).toBe(15);
    })
  });

  describe('Subtraction', () => {
    test('Test1', () => {
      expect(test1.subtract()).toBe(1);
    })
    test('Test2', () => {
      expect(test2.subtract()).toBe(0);
    })
    test('Test3', () => {
      expect(test3.subtract()).toBe(5);
    })
  });

  describe('Multiplication', () => {
    test('Test1', () => {
      expect(test1.multiply()).toBe(2);
    })
    test('Test2', () => {
      expect(test2.multiply()).toBe(1);
    })
    test('Test3', () => {
      expect(test3.multiply()).toBe(50);
    })
  });

  describe('Division', () => {
    test('Test1', () => {
      expect(test1.divide()).toBe(2);
    })
    test('Test2', () => {
      expect(test2.divide()).toBe(1);
    })
    test('Test3', () => {
      expect(test3.divide()).toBe(2);
    })
  });

});