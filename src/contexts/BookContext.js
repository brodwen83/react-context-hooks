import React, { useState, createContext } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, setBooks] = useState([
    { title: 'the way of the kings', author: 'patrick rothfuss', id: uuid() },
    { title: 'the name of the wind', author: 'bandon sanderson', id: uuid() }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    const booksCopy = books;
    setBooks(booksCopy.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
}

BookContextProvider.propTypes = {
  children: PropTypes.any
};

export default BookContextProvider;
