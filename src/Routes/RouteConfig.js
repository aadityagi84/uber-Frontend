import Home from "../components/home/Home";
import UserLogin from "../components/Auth/UserLogin";
import UserSignup from "../components/Auth/UserSignup";
import Dashboard from "../components/Pages/Dashboard";

const routes = [
  { path: "/", component: Home, protected: false },
  { path: "/login", component: UserLogin, protected: false },
  { path: "/signup", component: UserSignup, protected: false },
  { path: "/home", component: Dashboard, protected: true },
];

export default routes;
