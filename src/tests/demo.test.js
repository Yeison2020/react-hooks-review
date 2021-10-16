test("It should be true this test Yeison Awesome", () => {
  const isActive = true;
});

describe("Pruebas en el archivo demo.test.js", () => {
  test("Las string should be the same", () => {
    //Inicializacion

    const message = "Hola mundo";

    // Comparacion con este
    const message2 = "Hola mundo";
    expect(message).toBe(message2);
  });
});

//   if (isActive) {
//     throw new Error("No esta Activo");
//   }
