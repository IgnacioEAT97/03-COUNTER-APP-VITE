import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar heroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe)
        expect(heroe).toEqual({id:1,name:'Batman', owner:'DC'})
     });

     test('getHeroeById debe retornar undefined si no encuentra id', () => { 
        const id = 100;
        const heroe = getHeroeById(id);
        console.log(heroe)
        
        expect(heroe).toBeFalsy(); // Evalua si es undefined o null, como tambien Falso, asique tener cuidado
     });

     test('Debe retornar un arreglo con los heroes de DC', () => { 
        const owner= 'DC';
        const heroe = getHeroesByOwner(owner);
        expect(heroe.length).toBe(3);
        expect(heroe).toEqual([{id: 1,name: 'Batman',owner: 'DC'}, {id: 3,name: 'Superman',owner: 'DC'},{id: 4, name: 'Flash', owner: 'DC'
        },])
        expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner)) // Forma correcta de hacer lo mismo que arriba
      });

      test('Debe retornar un arreglo con los heroes de Marvel', () => { 
        const owner= 'Marvel';
        const heroe = getHeroesByOwner(owner);
        expect(heroe.length).toBe(2);
        expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner)) // Forma correcta de hacer lo mismo que arriba
      });

  
 })