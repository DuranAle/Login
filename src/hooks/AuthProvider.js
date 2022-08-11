import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("userSub")) || null
  );
  const [rol, setRol] = useState("");

  useEffect(() => {
    try {
      //localStorage.setItem("user", JSON.stringify(user)); modifique todo localStorage por sessionSto
      sessionStorage.setItem("userSub", JSON.stringify(user));
      console.log("authProvider 1");
    } catch (error) {
      console.log("authProvider 2");
      sessionStorage.removeItem("userSub");
      console.log(error);
    }
  }, [user]);

  /***          cambiar aca las 3 funciones....      */

  const contextValue = {
    user,
    login({ token, role }) {
      setUser({ token });
      setRol({ role });
    },
    logout() {
      setUser(null);
      setRol(null);
      sessionStorage.removeItem(
        "userSub"
      ); /** elimino token del localStorage */
    },
    isLogged() {
      return !!user;
    },
    devolver() {
      return { headers: { Authorization: `Bearer ${user.token}` } };
      // return user.token;
    },

    isReturn() {
      return { Authorization: `Bearer ${user.token}` };
    },

    isRol() {
      //console.log(rol);
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
