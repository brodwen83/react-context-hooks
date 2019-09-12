import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ADD_BOOK } from '../reducers/bookReducer';

export default function NewBookForm() {
  const [book, setBook] = useState({ title: '', author: '' });
  const { dispatch } = useContext(BookContext);

  const handleChange = event => {
    const { value, name } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: ADD_BOOK, book });
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
