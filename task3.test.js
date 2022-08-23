const Calculator = require('./task3.js');

const cal= new Calculator();

describe("Calculator test", () => {
    test('Addition', () => {
        expect(cal.add(1,2)).toBe(3);
      });
    test('Subtraction', () => {
        expect(cal.subtract(2,1)).toBe(1);
      });
    test('Division', () => {
        expect(cal.divide(2,1)).toBe(2);
      });
    test('Conditional statement', () => {
        expect(()=>{cal.divide(2,0)}).toThrow(new Error('Undefined'));
      });
    test('Multiplication', () => {
        expect(cal.multiply(2,1)).toBe(2);
      });
  });