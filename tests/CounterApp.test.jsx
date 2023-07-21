import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en counterApp', () => { 
    const value = 100;
    test('debe de hacer match con el snapshot', () => { 

        const {container} = render(<CounterApp value={value}></CounterApp>)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={100}></CounterApp>)
        expect(screen.getByText(100)).toBeTruthy();
     });

     test('debe de incrementar con el boton +1', () => { 

        render(<CounterApp value= {value}></CounterApp>)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(value + 1)).toBeTruthy();
      });

      test('debe de decrementar con el boton +1', () => { 

        render(<CounterApp value= {value}></CounterApp>)
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(value - 1)).toBeTruthy();
        //screen.debug();
      });

      test('debe funcionar boton de reset', () => { 
        render(<CounterApp value= {455}></CounterApp>)
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));

        expect(screen.getByText(455)).toBeTruthy();

       });
 })