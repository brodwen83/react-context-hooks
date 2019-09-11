import React from 'react';
import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
