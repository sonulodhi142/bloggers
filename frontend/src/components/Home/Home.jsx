import React from 'react'
import LeftSidebar from "../LeftSidebar/LeftSidebar"
import RightSidebar from "../RightSidebar/RightSidebar"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Latest from './Latest'
import Post from '../Post/Post'
import Posts from '../Posts/Posts'
import Tags from './Tags'

const Home = () => {
  const siteName = "Blogger"

  return (
    <>
      {/* <Navbar siteName={siteName}/> */}
      {/* <LeftSidebar/>
      <Latest/>
      <div className='sidebar-posts border'>
        <Posts/>
      </div> */}
      <Tags />
      {/* <RightSidebar/> */}
      {/* <Footer/> */}
    </>
  )
}

export default Home