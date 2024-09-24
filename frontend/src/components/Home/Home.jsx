import React from 'react'
import './Home.scss';
import LeftSidebar from "../LeftSidebar/LeftSidebar"
import RightSidebar from "../RightSidebar/RightSidebar"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Latest from './Latest'
import Posts from '../Posts/Posts'
import Carousel from '../carousel/Carousel';

const Home = () => {
  

  return (
    <>
      
      <div className="carousel">
        <Carousel/>
      </div>
      <LeftSidebar/>
      <div className="latest-box flex" >
        <div className="latest"  >
          <Latest/>
        </div>
        <div className='rightsidebar'>
          <RightSidebar/>
        </div>
      </div>
      <div className='sidebar-posts border'>
      <Posts/>
      </div>
      <Footer/>
    </>
  )
}

export default Home