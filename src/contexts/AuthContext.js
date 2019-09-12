import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };

  toggleAuth = () => {
    this.setState(prevState => ({
      isAuthenticated: !prevState.isAuthenticated
    }));
  };

  render() {
    const { children } = this.props;

    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

AuthContextProvider.propTypes = {
  children: PropTypes.any
};
