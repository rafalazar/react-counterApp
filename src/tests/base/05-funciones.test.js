import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas de funciones', () => {

    test('getUser() debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'rafalazar'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    });

    test('getUsuarioActivo() debe retornar un objeto con el parámetro enviado', () => {

        const nombre = 'Ella';

        const userTest = {
            uid: 'ABC567',
            username: 'Ella'
        }

        const userActive = getUsuarioActivo(nombre);

        expect(userActive).toEqual(userTest);
        
    })
    

});