import React, { useState, useContext } from 'react';
import uuid from 'uuid/v1';
import { ThemeContext } from '../contexts/ThemeContext';
import NewBookForm from './NewBookForm';

function BookList() {
  const [books, setBooks] = useState([
    { title: 'the way of the kings', id: uuid() },
    { title: 'the name of the wind', id: uuid() },
    { title: 'the final empire', id: uuid() }
  ]);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const addBook = title => {
    setBooks([...books, { title, id: uuid() }]);
  };

  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => (
          <li style={{ background: theme.ui }} key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>

      <NewBookForm addBook={addBook} />
    </div>
  );
}

export default BookList;
