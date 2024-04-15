import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null
})

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn") === true);
  const [user, setUser] = useState(
    sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null
  );

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("user", JSON.stringify(userData));
  }

  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider