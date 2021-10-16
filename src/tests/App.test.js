import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import "@testing-library/jest-dom";
//-----------------------
// import Enzyme from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Enzyme.configure({ adapter: new Adapter() });
//-----------------------

describe("Pruebas App", () => {
  // test("Mostrar el mensaje Hola soy Yeison", () => {
  //   const salud = "Hola soy Yeison";
  //   const { getByText } = render(<App salud={salud} />);
  //   expect(getByText(salud)).toBeInTheDocument();
  // });

  test("Debe mostrar <App>Correctamente</App>", () => {
    const salud = "Hola soy Yeison !!";
    const wrapper = shallow(<App salud={salud} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar subtitle sent by props", () => {
    const salud = "Hola soy Yeison !!";
    const soySubtitle = "Soy un subtitulo";
    const wrapper = shallow(<App salud={salud} subtitle={soySubtitle} />);

    //----------------------
    const texttoParrafo = wrapper.find("p").text();
    console.log(texttoParrafo);
    expect(texttoParrafo).toBe(soySubtitle);
  });
});
