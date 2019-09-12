import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewBookForm({ addBook }) {
  const [book, setBook] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setBook(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addBook(book);
    setBook('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add new Book</label>
      <input type='text' value={book} onChange={handleChange} />
      <input type='submit' value='Add book' />
    </form>
  );
}

NewBookForm.propTypes = {
  addBook: PropTypes.func
};
