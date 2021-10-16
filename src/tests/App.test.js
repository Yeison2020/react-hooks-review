import React from "react";
import { getByText, render } from "@testing-library/react";
import App from "../App";

describe("Pruebas App", () => {
  test("Mostrar el mensaje Hola soy Yeison", () => {
    const salud = "Hola soy Yeison";

    const { getByAltText } = render(<App salud={salud} />);

    expect(getByText(salud)).toBeInTheDocument();
  });
});
