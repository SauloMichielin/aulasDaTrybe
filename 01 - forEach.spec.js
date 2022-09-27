const multiplicaPor3 = require('./01 - forEach');

describe ('A função multiplica por 3', () => {
  it('é uma função', () => {
    expect(typeof multiplicaPor3).toBe('function');
  });

  it('multiplica cada elemento por 3', () => {
    expect(multiplicaPor3([])).toEqual([]);
    expect(multiplicaPor3([1, 2, 3])).toEqual([3, 6, 9]);
    expect(multiplicaPor3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
  });
});