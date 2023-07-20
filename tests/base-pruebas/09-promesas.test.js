import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe('Pruebas en promesas', () => { 

    test('getHeroeByIdSync debe de retornar un heroe', (done) => { // el callback done sirve para decir que el test termina cuando se llama a la funcion done(), sino lo encuentra en 5000 ms tira error
            const id = 1;
            getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },);
                done();
            });
    });

    test('getHeroeByIdSync debe de retornar error', (done) => { // el callback done sirve para decir que el test termina cuando se llama a la funcion done(), sino lo encuentra en 5000 ms tira error
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
            done();
        })
            
        });
});
