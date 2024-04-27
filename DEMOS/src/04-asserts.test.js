// Tambien conocidos como matchers
/*
    toEqual: Compara si dos valores son iguales en contenido.
    toBeNull: Verifica si un valor es nulo.
    toBeDefined: Verifica si un valor está definido.
    not.toBeUndefined: Verifica si un valor no es indefinido.
    toBeTruthy: Verifica si un valor es verdadero.
    not.toBeFalsy: Verifica si un valor no es falso.
    toBeFalsy: Verifica si un valor es falso.
    toMatch: Verifica si una cadena coincide con un patrón regular.
    toContain: Verifica si un elemento está presente en un arreglo.
 */

test("test obj", () => {
  const data = { name: "miller" };
  data.lastname = "arias";
  expect(data).toEqual({ name: "miller", lastname: "arias" });
});

test("null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("booleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("strings", () => {
  expect("Christoph").toMatch(/stop/);
});

test("list / arrays", () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
