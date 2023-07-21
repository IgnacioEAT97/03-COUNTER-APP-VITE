import React from 'react';
import ReactDOM from 'react-dom/client';
//import {HelloWorldApp} from './HelloWorldApp'
import {FirstApp} from './FirstApp'
import { CounterApp } from './CounterApp';

import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp title='Hola soy vegeta' /> */}   {/* Pasamos las props del componente padre al hijo  */}
         <CounterApp value={30}></CounterApp> 
    </React.StrictMode>
)