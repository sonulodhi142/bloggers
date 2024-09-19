import React from 'react'
import LeftSidebar from "../LeftSidebar/LeftSidebar"
import RightSidebar from "../RightSidebar/RightSidebar"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Latest from './Latest'
import Post from '../Post/Post'
import Posts from '../Posts/Posts'

const Home = () => {
  const siteName = "Blogger"

  return (
    <>
      {/* <Navbar siteName={siteName}/> */}
      <LeftSidebar/>
      <Latest/>
      <Posts/>
      {/* <RightSidebar/> */}
      {/* <Footer/> */}
    </>
  )
}

export default Home