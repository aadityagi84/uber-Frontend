import { Link } from "react-router-dom";
import homepage from "../../assets/home-page.jpg";
import Logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className=" flex flex-col h-screen pb-10   relative ">
      <div className="absolute w-[90%] top-1 left-[5%] bg-[linear-gradient(180deg,_hsla(0,0%,0%,1)_15%,_hsla(250,14%,61%,1)_100%)] text-white  p-6 rounded-md ">
        <div className="h-[100px]">
          <img src={Logo} className="w-[80px] mx-auto animate-spin-slow" />
        </div>
        <h2 className="text-center  text-[20px] leading-tight">
          Welcome to Drive App
        </h2>
        <p className="text-sm text-center  pt-4">
          Seamless Rides, Anytime, Anywhere 🚖
        </p>
      </div>
      <div className="h-full flex items-center justify-center  mt-[200px] p-6">
        <img src={homepage} className=" w-full " alt="" />
      </div>
      <div className="w-[90%] mx-auto">
        <div>
          <Link
            to="/login"
            className="bg-black flex  items-center justify-center w-full text-white px-4 py-3 transition-all duration-1000 transform hover:scale-105  border border-[#000] hover:bg-white  hover:text-black rounded-md  font-medium text-[17px] mt-4"
          >
            User Login
          </Link>
        </div>
        <div className="">
          <Link
            to="/captain-login"
            className="bg-whitw flex  items-center justify-center w-full text-black px-4 py-3 transition-all duration-1000 transform hover:scale-105  border border-[#000] hover:bg-black  hover:text-white rounded-md  font-medium text-[17px] mt-4"
          >
            Captain Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
