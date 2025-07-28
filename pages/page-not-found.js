import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import PageNotFound from '@/components/PageNotFound'
import React from 'react'

const pagenotfound = () => {
  return (
    <div>
        <Navbar/>
        <PageNotFound/>
        <FooterSection/>
    </div>
  )
}

export default pagenotfound