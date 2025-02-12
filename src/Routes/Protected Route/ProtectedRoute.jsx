import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ Component }) => {
  const [isAuth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("SessionId") || Cookies.get("SessionId");
    if (!login) {
      setAuth(false);
      navigate("/login");
    } else {
      setAuth(true);
    }
  }, [navigate]);

  if (isAuth === null) {
    return <h1>Loading...</h1>;
  }

  return isAuth ? <Component /> : null;
};

export default ProtectedRoute;
