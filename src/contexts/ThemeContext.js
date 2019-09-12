import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

ThemeContextProvider.propTypes = {
  children: PropTypes.any
};

export default ThemeContextProvider;
