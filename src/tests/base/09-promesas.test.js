import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
  test("Debe retornar in Heroe Async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("Should return an error pro id no existe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("Nose se puedo encontra el error");
      done();
    });
  });
});
