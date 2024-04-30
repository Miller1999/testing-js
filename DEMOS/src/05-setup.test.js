//describe sirve para aislar conjuntos de prueba
// beforeAll => corre antes de todas las pruebas, esta sentencia respeta el scope del describe
// afterAll => corre despues que todas las pruebas se ejecuten, esta sentencia respeta el scope del describe
// beforeEach => corre antes de cada prueba
// afterEach => corre despues de cada prueba
describe("Set", () => {
  beforeAll(() => {});
  beforeEach(() => {});
  test("case 1", () => {
    expect(1 + 1).toBe(2);
  });
  test("case 2", () => {
    expect(1 + 3).toBe(4);
  });
  afterEach(() => {});
  afterAll(() => {});
});

describe("other group test", () => {
  test("case 3", () => {
    expect(1 + 1).toBe(2);
  });
  test("case 4", () => {
    expect(1 + 3).toBe(4);
  });
});
