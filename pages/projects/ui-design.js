import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import UI from '@/components/UI'
import React from 'react'

const ui = () => {
  return (
    <div>
        <Navbar/>
        <UI/>
        <FooterSection/>
    </div>
  )
}

export default ui