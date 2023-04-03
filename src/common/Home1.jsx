import React from 'react'

export const Home = () => {
  var bg_img = "https://res.cloudinary.com/dldjt5ca6/image/upload/v1678564301/agritech/agrifarm1_f5lou3.jpg";
  const home_style = {
    backgroundImage: "url('https://res.cloudinary.com/dldjt5ca6/image/upload/v1678734274/agritech/agrifarm1_hoskvy.jpg')",
    // https://res.cloudinary.com/dldjt5ca6/image/upload/v1678564910/agritech/agrifarm1_fsexwc.jpg

  };
  return (
    <div className="home grid min-h-[100vh] w-[100vw] bg-cover bg-zinc-700 " style={home_style}>
      <nav className='nav min-h-[0.5vw] bg-transparent min-w-[100vw]'></nav>
      <div className="main flex flex-wrap sm:gap-0 gap-6 justify-center">
        <div className="mini-page-1 min-w-[50%] w-fit flex gap-[50px] flex-col justify-center items-center ">
          <h1 className='text-white sm:text-6xl text-4xl flex flex-col font-bold font-serif'>
            <p>Build</p>
            <br />
            <div className='flex gap-[3vw]'>
              <p>your</p> <p className="col text-orange-600 w-fit m-0"> Farm </p>
            </div>
            <br />
            <div className='flex gap-[3vw] font-mono'>
              <p className="col w-fit m-0"> from scratch </p>
            </div>
          </h1>
          <div className="status flex flex-wrap gap-[20px] px-[10px] justify-center items-center">
            <div className="box rounded-xl border-white border-[3px] w-[150px] h-[150px] flex flex-col justify-center items-center">
              <p>20k</p>
              <p>Farmers</p>
            </div>
            <div className="box rounded-xl border-white border-[3px] w-[150px] h-[150px] flex flex-col justify-center items-center">
              <p>27k</p>
              <p>Farm Lands</p>
            </div>
            <div className="box rounded-xl border-white border-[3px] w-[150px] h-[150px] flex flex-col justify-center items-center">
              <p>20k</p>
              <p>Farmers</p>
            </div>
            <div className="box rounded-xl border-white border-[3px] w-[150px] h-[150px] flex flex-col justify-center items-center">
              <p>27k</p>
              <p>Farm Lands</p>
            </div>
          </div>
        </div>
        <div className="mini-page-2 min-w-[50%] w-fit flex justify-center items-center">
          <div className="form min-w-[260px] bg-green-600/40 bg-opacity-80 backdrop-blur-sm animate-slideup  min-h-[280px] rounded-2xl flex flex-col items-center justify-center gap-10 text-white">
            <input type="text" className='outline-none rounded-md py-[4px] px-[4px] pl-[10px] placeholder-white bg-white/40 bg-opacity-80 backdrop-blur-sm' placeholder='Username' name="" id="" />
            <input type="password" className='outline-none rounded-md py-[4px] px-[5px] pl-[10px] bg-white/40 bg-opacity-80 backdrop-blur-sm placeholder-white' placeholder='Password' name="" id="" />
            <button type="submit" className='Sign-In bg-orange-600 font-bold transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 cursor-pointer px-20 py-2 rounded-lg '>Login</button>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  )
}
