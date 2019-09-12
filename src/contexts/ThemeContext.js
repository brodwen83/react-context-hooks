import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  });

  const toggleTheme = () => {
    const { isLightTheme } = theme;

    setTheme({ ...theme, isLightTheme: !isLightTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.any
};

export default ThemeContextProvider;
