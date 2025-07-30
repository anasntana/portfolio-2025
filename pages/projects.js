import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'

const projects = () => {
  return (
    <div className="pb-32 md:pb-40">
      <Navbar/>
      <Projects/>
      <FooterSection/>
    </div>
  )
}

export default projects