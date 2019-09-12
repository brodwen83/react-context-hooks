import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import NewBookForm from './NewBookForm';
import { BookContext } from '../contexts/BookContext';

function BookList() {
  const { books, addBook } = useContext(BookContext);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(({ id, title }) => (
          <li style={{ background: theme.ui }} key={id}>
            {title}
          </li>
        ))}
      </ul>

      <NewBookForm addBook={addBook} />
    </div>
  );
}

export default BookList;
