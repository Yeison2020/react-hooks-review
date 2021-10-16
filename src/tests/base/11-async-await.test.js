import { getImagen } from "../../base/11-async-await";

describe("Retornar Url if not no existe, ", () => {
  test("Pruebas con async return url of a image", async () => {
    const url = await getImagen();
    expect(url.includes("http")).toBe(true);
  });
});
