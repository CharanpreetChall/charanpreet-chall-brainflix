import './Navigation.scss';
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import React from 'react';

function Navigation() {

  return (
    <div>

      <nav className='nav'>
        <Link to="/" className="nav__logo-link" >
          <img src={logo} className="nav__logo" alt="logo" />
        </ Link>
        <form className="nav__form">
          <textarea type="txt" placeholder="Search" className="nav__form-search" />
          <img className="nav__form-image avatar" src={avatar} alt="Mohan Muruge" />
          <Link to='/upload' >
            <button className="nav__form-button form-button">
              UPLOAD
            </button>
          </Link>
        </form>
      </nav>
    </div>
  )
}


export default Navigation;