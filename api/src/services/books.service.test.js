const BooksService = require("./books.service");
// Aqui estamos conectandonos a la db, pero eso en unit testing no se debe hacer para eso es el mocking
// El mocking es simular lo que enviaria la base de datos
// Se crea el Stub que es la informacion que se quiere simular

// Este array se crea con el fin de simular la respuesta
const fakeBooks = [
  {
    id: 1,
    name: "Harry Potter y la orden del fenix",
  },
  {
    id: 2,
    name: "Los juegos del hambre",
  },
];

// Este se crea para simular el lib que necesitamos, debe incluir todo el comportamiento que se tiene en el lib real
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// jest.mock -> se usa para hacer suplantaciones, es decir, para simular
jest.mock("../lib/mongo.lib.js", () => jest.fn().mockImplementation(() => MongoLibStub));
describe("Test for book service", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    // Limpia los mocks creados
    jest.clearAllMocks();
  });
  describe("test for getBooks", () => {
    test("should return a list book", async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });
    test("should return first book name", async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books[0].name);
      // Assert
      expect(books[0].name).toEqual("Harry Potter y la orden del fenix");
    });
  });
});
