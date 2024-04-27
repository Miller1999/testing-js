const { sum, multiply, divide } = require("./02-math");

//! ES NECESARIO CREAR UN TEST POR CADA ARCHIVO JS QUE QUERAMOS TESTEAR
// Se importan las funciones a testear
// Se usa test para crear la prueba test("mensaje que se espera que pase",()=>{expect(funcion a probar).toBe(resultado esperado)})
// Se pueden crear varios test y expect por archivos
// Para que se pueda hacer el test es necesario agregar un script en el package -> "test":"jest"

test("adds 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});
test("should be 4", () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});
test("should be 2.5", () => {
  const rta = divide(5, 2);
  expect(rta).toBe(2.5);
});
