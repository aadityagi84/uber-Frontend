const UserLogin = () => {
  return (
    <div className="py-10 w-[90%] mx-auto flex h-screen flex-col">
      <div className=" h-full"></div>
      <div className="">
        <form action="">
          <div className="relative ">
            <input
              type="email"
              required
              className=" border rounded outline-none  px-4 py-3  w-full"
            />
            <span className="absolute -top-3 left-3 px-4 rounded-md  bg-white ">
              Email
            </span>
          </div>
          <div className="relative  mt-6">
            <input
              type="password"
              required
              className=" border rounded outline-none  px-4 py-3 w-full"
            />
            <span className="absolute -top-3 left-3 px-4 rounded-md  bg-white ">
              Password
            </span>
          </div>
          <button className="bg-black w-full text-white px-4 py-3 transition-all duration-1000 transform hover:scale-105  border border-[#000] hover:bg-white  hover:text-black rounded-md  font-medium text-[17px] mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
