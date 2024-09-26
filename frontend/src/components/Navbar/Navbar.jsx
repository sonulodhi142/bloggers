import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
      <a className="navbar-brand" href="#">
        {props.siteName}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/' className="nav-link">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='admin'>
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar