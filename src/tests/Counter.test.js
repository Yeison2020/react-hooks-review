import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";

//----------Counter App testing

describe("Pruebas en Counter Component", () => {
  //first test
  test("It should show counter componet matching with the Snapshot", () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Tiene que mostrar el value default of 10", () => {
    const wrapper = shallow(<CounterApp value={10} />);
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("10");
  });
});
