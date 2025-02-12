import { useState } from "react";
import { Link } from "react-router-dom";
import { RxEyeOpen } from "react-icons/rx";
import { LuEyeClosed } from "react-icons/lu";
import loginLogo from "../../assets/login-logo.png";
import axios from "axios";
import { API } from "../../Constant/Utils";
import toast from "react-hot-toast";
const UserSignup = () => {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [passworddata, setPasswordData] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const isPassword = () => {
    setPassword((prevState) => !prevState);
  };

  const values = {
    firstname: firstName,
    lastname: lastname,
    email: email,
    password: passworddata,
  };
  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();
    try {
      const response = await axios.post(API.signup, values);
      toast.success(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      toast.error(
        error.response.data?.errors?.[0]?.msg || error.response.data?.message
      );
      console.log(
        error.response.data?.errors?.[0]?.msg || error.response.data?.message
      );

      console.log(error, "error in user creation");
    }
  };

  return (
    <div>
      <div className="py-10  flex flex-col justify-between">
        <div className="h-full flex items-center flex-col  justify-center ">
          <img
            src={loginLogo}
            className="w-1/3 animate-bounce  duration-1000 transiton-all"
          />
          <h1 className="text-[30px] font-bold ">Create Your Account</h1>
          <p className="text-sm text-gray-400">
            Join us and start your journey
          </p>
        </div>
        <div className="w-[90%] mx-auto mb-16  ">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-200 px-6 rounded-[40px] pb-2 mt-4">
                <label
                  htmlFor="firstname"
                  className="text-[13px] text-gray-500  pt-[4px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="false"
                  name="firstname"
                  className="w-full  text-[13px]  bg-transparent outline-none pb-2 px-1 "
                />
              </div>
              <div className="bg-gray-200 px-6 rounded-[40px] pb-2 mt-4">
                <label
                  htmlFor="lastname"
                  className="text-[13px] text-gray-500  pt-[4px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="false"
                  name="lastname"
                  className="w-full text-[13px]  bg-transparent outline-none pb-2 px-1 "
                />
              </div>
            </div>
            <div className="bg-gray-200 px-6 rounded-[40px] pb-2 mt-4">
              <label
                htmlFor="email"
                className="text-[13px] text-gray-500  pt-[4px]"
              >
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="false"
                name="email"
                className="w-full text-[13px]  bg-transparent outline-none pb-2 px-1 "
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
                  value={passworddata}
                  onChange={(e) => setPasswordData(e.target.value)}
                  autoComplete="false"
                  name="email"
                  className="w-full text-[13px]  bg-transparent outline-none  px-1 "
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
              <button
                type="submit"
                value="Register"
                className="w-full bg-[#fcd034] cursor-pointer rounded-[40px] font-semibold outline-none  px-1 py-3  "
              >
                Register
              </button>
            </div>
          </form>
          <div>
            <hr className="my-4 w-[80%] mx-auto" />
            <div className="text-sm text-center ">
              <p>
                Already have Account?{" "}
                <Link to="/login" className="text-[#fccc34] font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
