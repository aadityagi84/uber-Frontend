import { createContext, useContext, useState } from "react";

const CaptainContext = createContext();

const CaptainAuth = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (userData) => {
    setCaptain(userData);
  };

  const value = {
    captain,
    setCaptain,
    isLoading,
    setLoading,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainContext.Provider value={value}>{children}</CaptainContext.Provider>
  );
};

export default CaptainAuth;
