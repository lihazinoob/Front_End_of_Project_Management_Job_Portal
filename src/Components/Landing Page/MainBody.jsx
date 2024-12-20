import React from 'react'
import TopMenuBar from './TopMenuBar'
import AboutSection from './AboutSection'
import InfoCard from './InfoCard'
import TalentExploreSection from './JobExploreSection'
const MainBody = () => {
  return (
    <>
      <div className='bg-backgroundcolor'>
        <div> 
        <TopMenuBar />
        </div>
        
        <div className='pt-40 ml-24 mr-14 '>
          <AboutSection />
        </div>
        <div className='mt-40 ml-48 mr-14 pb-20'>
          <InfoCard />
        </div>
        <hr className='bg-buttoncolor w-full h-0.5 border-none'/>
        <div className='mt-40 ml-14 mr-14 pb-20'>
          <TalentExploreSection />
        </div>
      </div>

    </>
  )
}

export default MainBody
