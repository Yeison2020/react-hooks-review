import "@testing-library/jest-dom";
import { getUser } from "../../base/05-funciones";
describe("Prueba en 05-functions", () => {
  test("getUse have to return a Object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });
});
