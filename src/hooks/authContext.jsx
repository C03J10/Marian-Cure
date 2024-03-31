import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null
})

function AuthProvider ({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login}}>
      {children}
    </AuthContext.Provider>
  )
  
}

export default AuthProvider