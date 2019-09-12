import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const ThemeToggle = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => (
      <button onClick={toggleTheme}>Toggle the theme</button>
    )}
  </ThemeContext.Consumer>
);
