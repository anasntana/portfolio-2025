import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import VisualIdentity from '@/components/VisualIdentity'
import React from 'react'

const visualidentity = () => {
  return (
    <div>
      <Navbar/>
      <VisualIdentity/>
      <FooterSection/>
    </div>
  )
}

export default visualidentity