import React from 'react'

const AboutSection = () => {
  return (
    <div className='text-white grid grid-cols-2  items-center gap-40 leading-10'>
      <div className='flex flex-col'>
        <div className='text-6xl tracking-widest '>
          Project Management
        </div>
        <div className='text-5xl  font-bold tracking-widest flex justify-center mt-10 text-buttoncolor'>
          REIMAGINED
        </div>
        <div className='mt-10'>
          <ul>
            <li>
            
            ProJob is a project management tool that helps you organize your work and life.
            It is a simple and easy to use tool that helps you keep track of your projects and tasks.
          
            </li>
            <li>
            With ProJob, you can easily create projects, add tasks, 
            assign tasks to team members, set deadlines, and track progress.
            </li>
          </ul>
          
          
          
          
        </div>
      </div>
      <div>
        Image Section
      </div>
    </div>
  )
}

export default AboutSection
