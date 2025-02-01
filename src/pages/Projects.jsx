import React from 'react'
import CustomNav from '../components/CustomNav'
import CardItem from '../components/CardItem'
import img from "../images/multipul.webp"
import img1 from "../images/product3.jpg"
import img2 from "../images/down-1.jpg"
import img3 from "../images/batten1.jpg"
import img4 from "../images/product6.jpg"
import img5 from "../images/perfessional-consumer (1).webp"
import Footer from '../components/Footer'


function Projects() {
  return (
    <div className='project-wraper'>
     <CustomNav/>
    <div className="conatiner mt-5" style={{maxWidth:"1200px", margin:"auto"}}>
        <div className="row">
            <div className="col-md-4 mb-4">
            <CardItem
          id="card1"
          imageSrc={img}
          title="Stadium"
          description="Just add your desired image size (width & height) after our URL, and you'll get a random image."
        />
            </div>
            <div className="col-md-4 mb-4">
            <CardItem
          id="card2"
          imageSrc={img1}
          title="Stadium"
          description="Just add your desired image size (width & height) after our URL, and you'll get a random image."
        />
            </div>
            <div className="col-md-4 mb-4">
            <CardItem
          id="card3"
          imageSrc={img2}
          title="Stadium"
          description="Just add your desired image size (width & height) after our URL, and you'll get a random image."
        />
            </div>
            <div className="col-md-4 mb-4">
            <CardItem
          id="card4"
          imageSrc={img4}
          title="Lorem Picsum"
          description="Just add your desired image size (width & height) after our URL, and you'll get a random image."
        />
            </div>
            <div className="col-md-4 mb-4">
            <CardItem
          id="card5"
          imageSrc={img5}
          title="Lorem Picsum"
          description="Just add your desired image size (width & height) after our URL, and you'll get a random image."
        />
            </div>
            <div className="col-md-4 mb-4">
            <CardItem
          id="card6"
          imageSrc={img3}
          title="Lorem Picsum"
          description="Just add your desired image size (width & height) after our URL, and you'll get a random image."
        />
            </div>
        </div>
    </div>
       
<Footer/>
  
    </div>
  )
}

export default Projects