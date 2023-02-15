import { add, add2max, add2 } from './calculator';
import * as business from './business/calculator.business'; //exportar directamente del archivo

// mock
/* jest.mock('./business/calculator.busines', () => {
  return {
    //isLowerThan: jest.fn(),
    isLowerThan: jest.fn(() => {
      console.log('Another implementation');
    }),
    max: 7,
  };
}); */

describe('Calculator specs', () => {
  describe('add', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // Act
      const result = add(a, b);
      // Assert
      expect(result).toEqual(4); // Valor del objeto
      expect(result).toBe(4); // Direcion de memoria
      expect(result).toStrictEqual(4); // Detecta valores undefined
    });
    it('should call isLowerThanFive when  when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // stub
      const isLowerThanFive = jest
        .spyOn(business, 'isLowerThanFive')
        .mockImplementation((result) => {
          console.log(`This is the result ${result}`);
        });
      // Act
      const result = add(a, b);
      // Assert
      expect(isLowerThanFive).toHaveBeenCalled();
      expect(isLowerThanFive).toHaveBeenCalledWith(4);
    });
    it('should call to original implementation isLowerThanFinve', () => {
      // Arrange
      const a = 2;
      const b = 1;
      // Act
      const result = add(a, b);
      // Assert
      expect(result).toEqual(3);
    });
  });

  describe('add2', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      const isLowerThanFive = jest.fn();
      // Act
      const result = add2(a, b, isLowerThanFive);
      // Assert
      expect(result).toEqual(4); // Valor del objeto
      expect(result).toBe(4); // Direcion de memoria
      expect(result).toStrictEqual(4); // Detecta valores undefined
    });
    it('should call isLowerThanFive when  when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // spy
      const isLowerThanFive = jest.fn();
      // Act
      const result = add2(a, b, isLowerThanFive);
      // Assert
      expect(isLowerThanFive).toHaveBeenCalled();
      expect(isLowerThanFive).toHaveBeenCalledWith(4);
    });
  });
  describe('add2max', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // stub
      const isLowerThanFive2 = jest
        .spyOn(business, 'isLowerThanFive2')
        .mockImplementation((result) => {
          console.log(`This is the result ${result}`);
        });
      // Act
      const result = add2max(a, b);
      // Assert
      expect(result).toEqual(4);
    });
  });
});
