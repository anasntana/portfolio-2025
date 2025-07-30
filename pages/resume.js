import About from '@/components/About'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Resume from '@/components/Resume'
import React from 'react'

const resume = () => {
  return (
    <div className="pb-32 md:pb-40">
      <Navbar/>
      <Resume/>
      <FooterSection/>
    </div>
  )
}

export default resume