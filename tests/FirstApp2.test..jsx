import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en componente FirstApp', () => { 

    /* test('debe de  hacer match con el snapshot ', () => {
        const title = 'Hola soy goku'
        const {container} = render(<FirstApp title={title}/>); //Actualiza objeto screen
        expect(container).toMatchSnapshot(); //Toma fotografia del componente renderizado y lo almacena en la carpeta que se crea "__snapshots__"

     }); */

     test('Debe mostrar el titulo en H1', () => { 
        const title = 'Hola soy goku'
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);

        expect(getByText(title)).toBeTruthy(); // Busca si el elemento title este contenido en algun lado
        expect(getByTestId('test-title').innerHTML).toContain(title)
       /*  const h1 = container.querySelector('h1')
        //expect(h1.innerHTML).toBe(title); //Toma el contenido de h1 y lo compara, si es igual por logica significa que esta contenido en un h1, ESTO NO SE RECOMIENDA
        expect(h1.innerHTML).toContain(title); // Espera que el titulo este contenido dentro del h1, osea que si hay espacios u otras cosas da lo mismo, si esta contenido pasa la prueba
 */   
     });

     test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola soy goku'
        const subTitle = 'Soy un subtitulo'
        const {getAllByText} = render( //Es un arreglo que trae todos los titulos y subtitulos
        <FirstApp title={title} subTitle={subTitle}
        />);
        expect(getAllByText(subTitle).length).toBe(2); // Comparamos que el tamaño del arreglo sea 2, ya que hay 2 subtitlos en el DOM
     })
});