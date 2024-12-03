import React from 'react'

const TopMenuBar = () => {
  return (
    <div className='bg-topmenubarbgcolor'>
      <div className='text-white p-4 h-18 flex flex-row items-end  gap-96 ml-16'>
        <div>
          ProJob
        </div>
        <div>
          <nav className='flex flex-row items-center gap-24'>
            <div>
              Explore Jobs
            </div>
            <div>
              Explore Companies
            </div>
            <div>
              Testimonials
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default TopMenuBar
