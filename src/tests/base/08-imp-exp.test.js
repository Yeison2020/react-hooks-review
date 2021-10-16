import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe("Pruebas en funciones the heroes", () => {
  test("Should return a heroe", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroesData = heroes.find((heroe) => heroe.id === id);

    expect(heroe).toBe(heroesData);
  });

  //---------------------------------------------------
  test("Should return a heroe Undefined if not exist", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    // const heroesData = heroes.find((heroe) => heroe.id === id);

    expect(heroe).toBe(undefined);
  });

  test("Debe retornar owner", () => {
    const owner = "DC";
    const functionOwner = getHeroesByOwner(owner);

    const ownerData = heroes.filter((el) => el.owner === owner);
    expect(functionOwner).toEqual(ownerData);
  });
});
