import './Navigation.scss';
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
// import searchIcon from '../../assets/Icons/search.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import { Link } from "react-router-dom";
import React from 'react';

function Navigation(props) {

  return (
    <div>

      <nav className='nav'>
        <Link to="/" className="nav__logo-link" >
          <img src={logo} className="nav__logo" alt="logo" />
        </ Link>
        <form className="nav__form">
            <input type="txt" placeholder="Search" className="nav__form-search" />        
            <Link to='/upload' >
              <button className="nav__form-button form-button">
                <img className="nav__form-button-icon button-icon" src={uploadIcon} alt="uploadIcon" />
                UPLOAD
              </button>
            </Link>
            <img className="nav__form-image avatar" src={avatar} alt="Mohan Muruge" />
        </form>
      </nav>           
    </div>
  )
}


export default Navigation;