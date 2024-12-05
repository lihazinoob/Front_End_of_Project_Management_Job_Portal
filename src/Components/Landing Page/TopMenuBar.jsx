import React from 'react'

const TopMenuBar = () => {
  return (
    <div className='bg-topmenubarbgcolor rounded-sm shadow-lg shadow-black fixed top-0 left-0 w-full z-10'>
      <div className='text-white p-4 h-18 flex flex-row items-end  gap-64 ml-16'>
        <div className='font-bold tracking-widest text-2xl'>
          ProJob
        </div>
        <div>
          <nav className='flex flex-row items-center gap-24 tracking-wide text-base'>
            <div className='text-center cursor-pointer transition-transform tr3ransform hover:-translate-y-1 hover:shadow-lg'>
              
              Explore Jobs
            </div>
            <div className='text-center cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg'>
              Explore Companies
            </div>
            <div className='text-center cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg'>
              Testimonials
            </div>
          </nav>
        </div>
        <div className='flex flex-row items-center gap-12'>
          <button className='text-center cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:text-lg'>
            Login
          </button>
          <button className='text-center cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:text-lg'>
            SignUp
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopMenuBar
