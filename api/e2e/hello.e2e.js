//Se instalo supertest para empezar con las pruebas de integracion
// Se creo el archivo jest-e2e.json que es la configuracion para las pruebas de integracion
// Se creo un script en package jest:e2e

const request = require("supertest");

const createApp = require("../src/app");
const { response } = require("express");

describe("Test for hello endpoint", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("test for [GET]", () => {
    test("should return 'hello world'", () => {
      return request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Hello World!");
        });
    });
  });
});
