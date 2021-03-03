// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const arr1 = [];
  const arr2 = [];
  books.map((book) => {
    if (!book.borrows[0].returned) {
      arr1.push(book);
    } else {
      arr2.push(book);
    }
  });
  return [[...arr1], [...arr2]];
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  book.borrows.forEach((entry) => {
    accounts.forEach((account) => {
      if (entry.id === account.id && result.length < 10) {
        result = [...result, { ...entry, ...account }];
      }
    });
  });
  console.log(result);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
