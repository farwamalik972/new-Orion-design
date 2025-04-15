import React from 'react'
import NewNav from '../components/NewNav'
import video from "../images/pcb.MP4";
import PortfolioLanding from '../components/PortfolioLanding';
import Footer from '../components/Footer';
import OptionsSlider from '../components/OptionsSlider';
import NoteCard from '../components/NoteCard';
import AdvertiserServices from '../components/AdvertiserServices';
import VerticalCards from '../components/VerticalCards';
import StepsSection from '../components/StepsSection';

function NewHome() {
  return (
    <div className='new-home-wrapper'>
        <NewNav/>
            <div className="container-fluid mx-auto">
                <div className="row">
                    <div className="col-md-12 p-0">
                    <div className="video-wrapper">
                  <video autoPlay loop muted className="background-video">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                    </div>
                </div>
            </div>
         <PortfolioLanding/>
            <VerticalCards/>
            <StepsSection/>
         <Footer/>
    </div>
  )
}

export default NewHome