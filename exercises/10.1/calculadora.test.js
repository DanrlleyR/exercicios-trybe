const calc = require('./calculadora');

describe('tests da função soma', () => {
  test('verifica se a soma de 4 e 5 é 9', () => {
    expect(calc(4, 5)).toBe(9);
  })

  describe('tests da função soma', () => {
    test('verifica se a soma de 0 e 0 é 0', () => {
      expect(calc(0, 0)).toBe(0);
  })

  test('verifica se os parametros são 4 e "5"', () => {
    expect(() => { calc(4, '5') })
    .toThrow(/Argumento deve ser um numero/);
  })


  // test('soma é uma função', () => {
  //   expect(typeof soma).toBe('function')
  // })

  // test('verifica que a soma de 3 e 5 não é 9', () => {
  //   expect(soma(3, 5)).not.toBe(8);
  // })
  
})});
