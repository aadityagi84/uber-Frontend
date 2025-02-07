import { useState } from "react";
import { Link } from "react-router-dom";
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";
import loginLogo from "../../assets/login-logo.png";

const UserLogin = () => {
  const [password, setPassword] = useState(false);

  const isPassword = () => {
    setPassword((prevState) => !prevState);
  };
  return (
    <div className="h-screen  flex flex-col justify-between">
      <div className="h-full flex items-center flex-col  justify-center ">
        <img
          src={loginLogo}
          className="w-1/3 animate-bounce  duration-1000 transiton-all"
        />
        <h1 className="text-[30px] font-bold ">Welcome to Drive</h1>
        <p className="text-sm text-gray-400">Make it a memorable drive</p>
      </div>
      <div className="w-[90%] mx-auto mb-16  ">
        <form action="">
          <div className="bg-gray-200 px-6 rounded-[40px] pb-2">
            <label
              htmlFor="email"
              className="text-[13px] text-gray-500  pt-[4px]"
            >
              Email
            </label>
            <input
              type="email"
              required
              autoComplete="false"
              name="email"
              className="w-full bg-transparent outline-none pb-2 px-1 "
            />
          </div>
          <div className="bg-gray-200 px-6 rounded-[40px] pb-2 mt-4">
            <label
              htmlFor="password"
              className="text-[13px] text-gray-500 pt-[4px]"
            >
              Password
            </label>
            <div className="flex items-center ">
              <input
                type={password ? "text" : "password"}
                required
                autoComplete="false"
                name="email"
                className="w-full bg-transparent outline-none  px-1 "
              />
              <span
                onClick={isPassword}
                className="cursor-pointer bg-[#fcd034]/50 border-[#fcd034]/10 border p-2 rounded-full"
              >
                {password ? (
                  <RxEyeOpen className="text-[#000] font-bold text-[20px]" />
                ) : (
                  <LuEyeClosed className="text-[#000] font-bold text-[20px]" />
                )}
              </span>
            </div>
          </div>
          <div className="  rounded-[40px] pb-2 mt-4">
            <input
              type="button"
              value="Login"
              className="w-full bg-[#fcd034] cursor-pointer rounded-[40px] font-semibold w-full outline-none  px-1 py-3  "
            />
          </div>
          <div className=" text-center  text-sm text-[#fccc34] font-medium pt-2">
            <Link to="/forgot">Forgot Password ?</Link>
          </div>
        </form>
        <div>
          <hr className="my-4 w-[80%] mx-auto" />
          <div className="text-sm text-center ">
            <p>
              Don't have any account?{" "}
              <Link to="/signup" className="text-[#fccc34] font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
