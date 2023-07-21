import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en componente FirstApp', () => { 
   const title = 'Hola soy goku'
   const subTitle = 'Soy un subtitulo'
   test('debe de hacer match con el snaoshot', () => { 

      const {container} = render(<FirstApp title={title}></FirstApp>)
      expect(container).toMatchSnapshot();
   });

   test('debe de mostrar el mensaje "Hola soy goku', () => { 
      
      render(<FirstApp title={title}></FirstApp>)
      //screen.debug(); //La ultima version actualizada antes de los cambios del DOM
      expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar el titulo en un h1', () => { 
      render(<FirstApp title={title}></FirstApp>)
      expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
     });

     test('debe de mostrar el subtitulo enviado por props', () => {
      render(<FirstApp title={title} subTitle={subTitle}></FirstApp>)
      expect(screen.getAllByText(subTitle).length).toBe(2);
     })
});