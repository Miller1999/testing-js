import { faker } from "@faker-js/faker";

const generateOneBook = () => {
  return {
    _id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  };
};

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let i = 0; i < limit; i++) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = generateManyBooks;
