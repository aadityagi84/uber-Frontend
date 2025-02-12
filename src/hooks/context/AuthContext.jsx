import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return Cookies.get("SessionId") || null;
  });
  const [name, setName] = useState(() => {
    const storedUser = localStorage.getItem("sessionid");
    return storedUser ? storedUser : null;
  });

  const login = (userData, userName) => {
    setUser(userData);
    // const name = userName.fullname.firstname + " " + userName.fullname.lastname;
    // const name = userName.fullname.firstname;
    const name = setName(userName);
    const email = userName.email;

    setName(userName);
    localStorage.setItem("sessionid", name);
    Cookies.set("SessionId", JSON.stringify(userData), { expires: 1 });
  };

  useEffect(() => {
    console.log("User Updated:", user);
  }, [user, name]);
  return (
    <AuthContext.Provider value={{ login, user, name }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
