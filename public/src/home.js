// Note: Please do not change the name of the functions. The tests use those names to validate your code.
const { partitionBooksByBorrowedStatus } = require("./books");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return partitionBooksByBorrowedStatus(books)[0].length;
}

function _sortSplice(result) {
  return result
    .sort((recordA, recordB) => recordB.count - recordA.count)
    .splice(0, 5);
}

function getMostCommonGenres(books) {
  const list = books.map((book) => book.genre);
  const genres = [...new Set(list)];
  const result = genres.map((genre) => {
    const count = list.filter((bookGenre) => bookGenre === genre).length;
    return { name: genre, count: count };
  });

  return _sortSplice(result);
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    let count = book.borrows.length;
    return { name: book.title, count: count };
  });

  return _sortSplice(result);
}

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    let count = 0;
    books.map((book) => {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    });
    return { name: `${author.name.first} ${author.name.last}`, count };
  });

  return _sortSplice(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
