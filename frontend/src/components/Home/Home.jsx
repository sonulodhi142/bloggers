import React from 'react'
import LeftSidebar from "../LeftSidebar/LeftSidebar"
import RightSidebar from "../RightSidebar/RightSidebar"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Home = () => {
  const siteName = "Blogger"

  return (
    <>
      <Navbar siteName={siteName}/>
      <LeftSidebar/>
      <RightSidebar/>
      <Footer/>
    </>
  )
}

export default Home