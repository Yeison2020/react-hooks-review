import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

// I need to export the function from files and Testing

describe("Pruebas en 07 destructuring have to return string and number", () => {
  test("Debe return string y number", () => {
    const [letras, numero] = retornaArreglo();
    expect(letras).toBe("ABC");
    expect(numero).toBe(123);
  });
});
