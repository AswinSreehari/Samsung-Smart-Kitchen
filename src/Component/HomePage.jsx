import React from 'react'
import Navbar from './Navbar'
import SmartAppliances from './SmartAppilances'
import ThreeDNavbar from './3d-Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        {/* <ThreeDNavbar /> */}
      <SmartAppliances />
    </div>
  )
}

export default HomePage