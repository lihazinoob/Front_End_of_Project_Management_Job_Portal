import React from 'react'
import TopMenuBar from './TopMenuBar'
import AboutSection from './AboutSection'
const MainBody = () => {
  return (
    <>
      <div className='bg-backgroundcolor w-screen h-screen'>
        <TopMenuBar />
        <div className='mt-40 ml-24 mr-14 '>
          <AboutSection />
        </div>
      </div>

    </>
  )
}

export default MainBody
