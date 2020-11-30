import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import React from 'react';

describe('Pruebas sobre el Componente CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });
    
    test('Debe mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(
            <CounterApp value={100}/>
        );
        
        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('100');
    });

    test('Debe incrementar contador con +1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('11');
        
    });

    test('Debe disminuir contador con -1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('9');
        
    });

    test('Debe resetear el contador a su valor por defecto', () => {

        const wrapper = shallow(
            <CounterApp value={105}/>
        );

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('105');
        
    }); 
    
});

