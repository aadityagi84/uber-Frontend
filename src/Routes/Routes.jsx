import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ProtectedRoute from "./Protected Route/ProtectedRoute";
import routes from "./RouteConfig"; // routes config import

const RoutesData = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => {
          if (route.protected) {
            return (
              <Route
                key={index}
                path={route.path}
                element={<ProtectedRoute Component={route.component} />}
              />
            );
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center h-screen ">
              <h1 className="text-center font-bold text-[40px]">
                404 Not Found
              </h1>
              <Link
                to="/"
                className="bg-black text-white px-4 py-3 transition-all duration-700  border border-[#000] hover:bg-white  hover:text-black rounded-md font-medium text-[17px] mt-4"
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
