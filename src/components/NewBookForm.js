import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../contexts/BookContext';

export default function NewBookForm() {
  const [book, setBook] = useState({ title: '', author: '' });
  const { addBook } = useContext(BookContext);

  const handleChange = event => {
    const { value, name } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addBook(book.title, book.author);
    setBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='title'
        type='text'
        value={book.title}
        onChange={handleChange}
        name='title'
        required
      />
      <input
        placeholder='author'
        type='text'
        value={book.author}
        onChange={handleChange}
        name='author'
        required
      />
      <input type='submit' value='Add book' />
    </form>
  );
}

NewBookForm.propTypes = {
  addBook: PropTypes.func
};
