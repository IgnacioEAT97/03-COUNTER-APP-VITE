import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto',() =>{
            const testUser ={
                uid: 'ABC123',
                username: 'El_Papi1502'
            };
            const user = getUser();
            expect(testUser).toEqual(user); //Para objetos se debe utilizar el toEqual y NO EL TOBE ya que los objetos apuntan a distintos espacios en memoria
    })

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'Fernando';
       /*  const testUser = {
            uid: 'ABC567',
            username: name
        } */
        const user = getUsuarioActivo(name);
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
     })
})