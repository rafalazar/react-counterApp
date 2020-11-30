import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-sting.js', () => {

    test('getSaludo de retornar Hola Jordan', () => {

        const nombre = 'Jordan';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    });

    test('Si getSaludo no recibe parámetro, debe retornar Hola Ella', () => {
        const saludo = getSaludo();

        console.log(saludo);

        expect(saludo).toBe('Hola Ella');
    });

});