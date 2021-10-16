import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas 02-template-string", () => {
  test("prueba en el method getSalud , It should return Hola + Yeison", () => {
    const nombre = "Yeison";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
    console.log(saludo);
  });
});

describe("Esta prueba should return  Hola + Enmanuel", () => {
  test("getSaludo testing should return Hola + Enmanuel", () => {
    const nombre = "Enmanuel";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola Enmanuel");
    console.log(saludo);
  });
});
