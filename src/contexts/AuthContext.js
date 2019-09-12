import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({ isAuthenticated: false });

  const toggleAuth = () => {
    const { isAuthenticated } = auth;
    setAuth({ ...auth, isAuthenticated: !isAuthenticated });
  };

  return (
    <AuthContext.Provider value={{ ...auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.any
};

export default AuthContextProvider;
