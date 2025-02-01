import React from 'react'
import CustomNav from '../components/CustomNav'
import Footer from '../components/Footer'
import video from "../images/video.mp4"
import HomeProducts from '../components/HomeProducts'
import AutoSlider from '../components/AutoSlider'


function Home() {
  return (
    <>
    <div className="home-wrapper-page">
  <CustomNav />
  <div className="home-banner-img mb-5"></div>
<div className="container mb-5">
{/* auto carousel */}
<AutoSlider/>
</div>
  <Footer />
</div>

   
    </>
  )
}

export default Home