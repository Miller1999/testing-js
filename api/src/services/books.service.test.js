const BooksService = require("./books.service");

const generateManyBooks = require("../fakes/book.fake.mjs");

// Aqui estamos conectandonos a la db, pero eso en unit testing no se debe hacer para eso es el mocking
// El mocking es simular lo que enviaria la base de datos
// Se crea el Stub que es la informacion que se quiere simular

// Se crea el mock para mirar el comportamiento de una funcion
const mockGetAll = jest.fn();

// Este se crea para simular el lib que necesitamos, debe incluir todo el comportamiento que se tiene en el lib real
// const MongoLibStub = {
//   // Aqui se mira la funcion que se quiere espiar
//   getAll: mockGetAll,
//   create: () => {},
// };

// jest.mock -> se usa para hacer suplantaciones, es decir, para simular
jest.mock("../lib/mongo.lib.js", () =>
  jest.fn().mockImplementation(() => {
    return {
      getAll: mockGetAll,
      create: () => {},
    };
  })
);
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
      const fakeBooks = generateManyBooks(20);
      // Con mock resolve se simula una respuesta Promise
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      // Fue llamada
      expect(mockGetAll).toHaveBeenCalled();
      // Cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // Con estos parametros fue llamada???
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
    // test("should return first book name", async () => {
    //   // Arrange
    //   mockGetAll.mockResolvedValue({
    //     id: 1,
    //     name: "Harry potter 2",
    //   });
    //   // Act
    //   const books = await service.getBooks();
    //   console.log(books[0].name);
    //   // Assert
    //   expect(books[0].name).toEqual("Harry Potter y la orden del fenix");
    // });
  });
});
