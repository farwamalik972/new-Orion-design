import React from 'react'
import CustomNav from '../components/CustomNav'
import Footer from '../components/Footer'
import AutoSlider from '../components/AutoSlider'


function Home() {
  return (
    <>
      <div className="home-wrapper-page">
        <CustomNav />
        <div className="home-banner-img"></div>
        <div className="separator"></div>
        <div className="container-fluid p-0">
          {/* auto carousel */}
          <AutoSlider />
        </div>
        <Footer />
      </div>


    </>
  )
}

export default Home