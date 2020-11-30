import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
import React from 'react';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe mostrar el mensaje: hola soy un saludo :v', () => {

    //     const saludo = 'Hola soy un saludo :v';

    //     const {getByText} = render( <PrimeraApp saludo={saludo} /> );

    //     expect(getByText(saludo)).toBeInTheDocument();
        
    // });

    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola soy un saludo :v';

        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola soy un saludo :v';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={ subtitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
        
    });
    
    
});
