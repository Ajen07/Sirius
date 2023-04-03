import React from 'react'
export const Home = () => {
  
  const background = {
    background: "url(../img/bg-round.png), url(../img/bg-round-2.png), url(../img/bg-square.png), url(../img/bg-line.png), url('https://res.cloudinary.com/dldjt5ca6/image/upload/v1679467576/agritech/logo_zyvhtn.png')",
    backgroundPosition: "0px 40%, right 0 top 0, left 50% top 0, left 50% top 50%, center bottom -1px",
    backgroundRepeat: "no-repeat",
  }
  return (
    <>
      <div className="container flex flex-col items-center bg-white p-0 w-full">
        <div className="container relative flex flex-col mx-auto w-full p-0 bg-[#7EBC12]">
          <nav className="nav-bar flex items-center justify-between h-[5vw] px-[2vw]">
            <div className="logo flex gap-2 h-full">
              <img src="https://res.cloudinary.com/dldjt5ca6/image/upload/v1679467576/agritech/logo_zyvhtn.png" alt="company-icon" className='h-full ' />
              <p className='text-white text-[3vw] font-bold'>Soil Products Office</p>
            </div>
            <p className="home text-white font-thin text-[1.5vw]"> HOME </p>
            <p className="home text-white font-thin text-[1.5vw]"> ABOUT </p>
            <p className="home text-white font-thin text-[1.5vw]"> PLANS </p>
            <button className='bg-[#FF0F10] text-white rounded-lg py-[0.5vw] px-[2vw]'>Register</button>
          </nav>

          

          <img src="https://res.cloudinary.com/dldjt5ca6/image/upload/v1679468239/agritech/bg-bottom-hero_dtiiy8.png" alt="" className='w-full' />
        </div>
      </div>

    </>
  )









}
