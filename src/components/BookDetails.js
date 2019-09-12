import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../contexts/BookContext';

export default function BookDetails({ book }) {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
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
