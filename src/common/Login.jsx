// primary - #049467
// font - #7e3d24
// secondary font - #897c33

import React from "react";
import logo from "../assets/logo.png";
import { FaUserAlt, FaLock } from "react-icons/fa";
function Login() {
  const images = [
    {
      src: "https://i.ibb.co/0t6MFdp/login-bg-img.jpg",
    },
  ];
  return (
    <>
      {/* background */}
      <div className="w-screen lg:h-screen bg-[#049467] lg:py-16 lg:px-8 p-8 md:px-12">
        {/* Sign Up or Sign In card */}
        <div className="flex shadow-md rounded-xl w-full md:h-full flex-col lg:flex-row">
          {/* Image and brief (left side) */}
          <div 
            className={`lg:w-[65%] w-full rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl lg:rounded-tr-none  flex-col md:p-12 p-4 md:flex hidden`}
            style={{
              background: `url(${images[0].src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX:"center"
            }}
          >
            <div className="md:w-[100px] w-[50px] md:my-16 my-4">
              <img src={logo} alt="" className="w-full h-full"/>
            </div>
            <h1 className="font-bold md:text-2xl text-md text-[#897c33] uppercase">We are here to help farmers</h1>
            <p className="uppercase text-[0.65rem] md:text-base">We stad by the farmer with the billions of <br /> liras we spend on agriculture every year</p>
          </div>
          {/* Sign In form (right side) */}
          <div className="flex lg:w-[35%] w-full rounded-tr-xl rounded-br-xl lg:rounded-bl-none lg:rounded-tl-none rounded-bl-xl rounded-tl-xl bg-[#ffffff] flex-col ">
            <div className="md:px-16 py-4 px-2 flex justify-start">
              <div className="image md:w-[50px] w-[20px] h-[25px] md:h-auto mr-2 md:mt-0 mt-2">
                <img src={logo} alt="" className="w-full h-full" />
              </div>
              <div className="">
                <h1 className="font-bold md:text-2xl text-md text-[#7e3d24]">
                  SOIL PRODUCTS OFFICE
                </h1>
                <h1 className="font-bold md:text-2xl text-md text-[#897c33]">
                  FARMERS APPLICATION
                </h1>
              </div>
            </div>
            <div 
            className={`lg:w-[65%] w-full flex  flex-col md:p-12 p-4 md:hidden `}
            style={{
              background: `url(${images[0].src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX:"center"
            }}
          >
            <div className="md:w-[100px] w-[20px] h-[25px] md:h-auto md:my-16 my-4">
              <img src={logo} alt="" className="w-full h-full"/>
            </div>
            <h1 className="font-bold md:text-2xl text-md text-[#897c33] uppercase">We are here to help farmers</h1>
            <p className="uppercase text-[0.5rem] md:text-base">We stad by the farmer with the billions of <br /> liras we spend on agriculture every year</p>
          </div>
            <span className="md:mt-4 mt-0 bg-[#e2e3e2] w-full block h-[0.15rem]"></span>
            <div className="md:px-20 md:py-4 p-4">
              <h1 className="font-bold md:text-xl text-md">Sign In</h1>
              <h3 className="md:text-sm text-[0.5rem] text-[#e2e3e2] hover:text-[black]">
                Type your User name and Password to sign in.
              </h3>
              <div className="flex flex-col md:py-8 py-4">
                {/* Input of the users */}
                <div className="input md:mb-4 mb-2 relative group">
                  <input
                    type="text"
                    name="username"
                    className={`hover:border-[#b7b083] w-full border-[3px] md:p-3 p-1 rounded-xl focus:border-[#a59f77] outline-none md:pl-16 pl-12 transition-colors duration-300 ease-in`}
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-[8%] top-[50%] translate-y-[-50%] group-hover:text-[#a59f77] group-focus:text-[#a59f77] text-[#e2e3e2] transition-colors duration-300 ease-in"
                  >
                    <FaUserAlt />
                  </label>
                </div>
                <div className="input md:mt-4 relative group">
                  <input
                    type="password"
                    name="passowrd"
                    className={` hover:border-[#b7b083] w-full border-[3px] md:p-3 p-1 rounded-xl focus:border-[#a59f77] outline-none md:pl-16 pl-12 transition-colors duration-500 ease-in`}
                  />
                  <label
                    htmlFor="passowrd"
                    className="absolute left-[8%] top-[50%] translate-y-[-50%]  group-hover:text-[#a59f77] group-focus:text-[#a59f77] text-[#e2e3e2] transition-colors duration-500 ease-in"
                  ><FaLock/></label>
                </div>
                <div className="flex md:text-sm text-[0.5rem] w-full justify-end no-underline hover:underline my-2">
                  <p>forgot?</p>
                </div>
                {/* <div className="w-full md:text-sm text-[0.5rem] text-[#e2e3e2] my-2">
                  I agree the{" "}
                  <p className="underline inline-block text-black">
                    Term and Conditions
                  </p>{" "}
                  &{" "}
                  <p className="underline inline-block text-black">
                    Privacy Policy
                  </p>{" "}
                  by signing in.
                </div> */}
                <div className="input mt-4">
                  <input
                    type="submit"
                    name=""
                    className={` w-full rounded-xl text-white bg-[#059467] outline-none border-none md:p-3 p-1`}
                    value="Sign In"
                  />
                  <label htmlFor="passowrd"></label>
                </div>
                <div className="px-1 py-2">
                  <p className="md:text-sm text-[0.5rem] font-light">
                    Do not have account{" "}
                    <a href="#" className="underline">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
