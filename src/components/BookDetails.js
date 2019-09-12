import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../contexts/BookContext';
import { REMOVE_BOOK } from '../reducers/bookReducer';

export default function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: REMOVE_BOOK, id: book.id })}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
}

BookDetails.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string
  }).isRequired
};
