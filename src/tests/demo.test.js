describe('Pruebas en el archivo demo.test.js', () => {

    test('Los strings deben ser iguales', () => {

        //1. Inicialización
        const mensaje = 'Hola Val';
    
        //2. Estímulo
        const mensaje2 = `Hola Val`;
    
        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // ===
    
    });

});