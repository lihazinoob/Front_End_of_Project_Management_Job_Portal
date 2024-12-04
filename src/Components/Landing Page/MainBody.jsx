import React from 'react'
import TopMenuBar from './TopMenuBar'
import AboutSection from './AboutSection'
import InfoCard from './InfoCard'
const MainBody = () => {
  return (
    <>
      <div className='bg-backgroundcolor'>
        <div> 
        <TopMenuBar />
        </div>
        
        <div className='mt-40 ml-24 mr-14 '>
          <AboutSection />
        </div>
        <div className='mt-40 ml-48 mr-14'>
          <InfoCard />
        </div>
      </div>

    </>
  )
}

export default MainBody
