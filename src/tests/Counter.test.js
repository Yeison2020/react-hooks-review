import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";

//----------Counter App testing

describe("Pruebas en Counter Component", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  //first test-----------------------------

  test("It should show counter componet matching with the Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //-------------------------------------

  test("Tiene que mostrar el value default of 10", () => {
    const wrapper = shallow(<CounterApp value={10} />);
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("10");
    //Here is why I got the Error The text returned string
  });

  test("Should increment the counter", () => {
    wrapper.find("button").at(0).simulate("click");
    const textCounter = wrapper.find("h2").text().trim();
    expect(textCounter).toBe("11");
  });

  test("This should decrement the counter by 1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterBtn2 = wrapper.find("h2").text().trim();
    expect(counterBtn2).toBe("9");
  });

  test("This button should Reset the value of the counter", () => {
    wrapper.find("button").at(0).simulate("click");
    const textCounter = wrapper.find("h2").text().trim();
    console.log(textCounter);
    //-------------------
    wrapper.find("button").at(1).simulate("click");
    const btnReset = wrapper.find("h2").text().trim();
    expect(btnReset).toBe("0");
  });
});
