
const funciones = require('../src/factorial.js')

describe('Factorial Test Suite', () => {
    
    test('this is a simple test', () => {
        const fact3 = funciones.factorial(3);
        expect(fact3).toBe(6);
    })

    test('check the base case', () => {
        const fact3 = funciones.factorial(0);
        expect(fact3).toBe(1);
    })

});
