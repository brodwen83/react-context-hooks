import React, { useState, createContext } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, setBooks] = useState([
    { title: 'the way of the kings', id: uuid() },
    { title: 'the name of the wind', id: uuid() },
    { title: 'the final empire', id: uuid() }
  ]);

  const addBook = title => {
    setBooks([...books, { title, id: uuid() }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
}

BookContextProvider.propTypes = {
  children: PropTypes.any
};

export default BookContextProvider;
