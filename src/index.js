import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo='Hola soy un saludo :v' />, divRoot);
ReactDOM.render(<CounterApp value={10}/>, divRoot);