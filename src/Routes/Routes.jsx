import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import UserLogin from "../components/Auth/UserLogin";
import UserSignup from "../components/Auth/UserSignup";

const RoutesData = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center h-screen ">
              <h1 className="text-center font-bold  text-[40px]">
                404 Not Found
              </h1>
              <Link
                to="/"
                className="bg-black text-white px-4 py-3 transition-all duration-700  border border-[#000] hover:bg-white  hover:text-black rounded-md  font-medium text-[17px] mt-4"
              >
                Back to Home
              </Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default RoutesData;
