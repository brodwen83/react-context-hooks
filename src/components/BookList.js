import React, { useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

function BookList() {
  const { books } = useContext(BookContext);

  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;

  return books.length ? (
    <div
      className='book-list'
      // style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className='empty'>No books to read. Hello free time!</div>
  );
}

export default BookList;
