import Dashboard from "../components/Pages/Dashboard";
import Home from "../components/home/Home";
import UserLogin from "../components/Auth/UserLogin";
import UserSignup from "../components/Auth/UserSignup";
import CaptainLogin from "../components/Auth/CaptainLogin/CaptainLogin";
import CaptainSignup from "../components/Auth/CaptainLogin/CaptainSignup";

const routes = [
  { path: "/", component: Home, protected: false },
  { path: "/login", component: UserLogin, protected: false },
  { path: "/signup", component: UserSignup, protected: false },
  { path: "/home", component: Dashboard, protected: true },
  { path: "/captain-login", component: CaptainLogin, protected: false },
  { path: "/signup-captain", component: CaptainSignup, protected: false },
];

export default routes;
