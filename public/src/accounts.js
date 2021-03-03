// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  for (let account of accounts) {
    if (account.id === id) {
      return account;
    }
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort(function (accountA, accountB) {
    return accountB["name"]["last"].toLowerCase() >
      accountA["name"]["last"].toLowerCase()
      ? -1
      : 1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  const borrowedBooks = books.map((book) => book.borrows);
  const userRecords = borrowedBooks.reduce((acc, item) => acc.concat(item), []);
  const userIds = userRecords.map((user) => user.id);
  return userIds.filter((id) => id === account.id).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
