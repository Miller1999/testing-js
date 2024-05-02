const BooksService = require("./books.service");
// Aqui estamos conectandonos a la db, pero eso en unit testing no se debe hacer para eso es el mocking
// El mocking es simular lo que enviaria la base de datos
describe("Test for book service", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
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
  });
});
