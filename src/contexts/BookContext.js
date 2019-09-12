import React, { useReducer, createContext } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: 'the way of the kings', author: 'patrick rothfuss', id: uuid() },
    { title: 'the name of the wind', author: 'bandon sanderson', id: uuid() }
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

BookContextProvider.propTypes = {
  children: PropTypes.any
};

export default BookContextProvider;
