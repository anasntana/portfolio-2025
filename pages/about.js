import About from '@/components/About'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {
  return (
    <div className="pb-32 md:pb-40">
      <Navbar/>
      <About/>
      <FooterSection/>
    </div>
  )
}

export default about