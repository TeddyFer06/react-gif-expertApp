import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs( )', () => {
   test('Debe de retornar un arreglo de Gifs', async () => {
      const gifs = await getGifs('One Punch');

      // Arreglo con + de un elemento
      expect(gifs.length).toBeGreaterThan(0);

      // Comprobar la estructura del primer objeto del arreglo
      expect(gifs[0]).toEqual({
         id: expect.any(String),
         title: expect.any(String),
         url: expect.any(String),
      });
   });
});
