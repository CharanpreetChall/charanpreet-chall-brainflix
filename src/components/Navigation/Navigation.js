import './Navigation.scss';
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import searchIcon from '../../assets/Icons/search.svg';
import uploadIcon from '../../assets/Icons/upload.svg';

function Navigation() {
  return (
    <nav className='nav'>

      <a href="/" className="nav__logo-link">
          <img src={logo} className="nav__logo" alt="logo" />
      </a>

      <form className="nav__form">
        <input type="txt" placeholder="Search" className="nav__form-search" />

        <button className="nav__form-button form-button">
          <img className="nav__form-button-icon button-icon" src={uploadIcon} alt="uploadIcon"/>
          UPLOAD
        </button>

        <img className="nav__form-image avatar" src={avatar} alt="Mohan Muruge"/>
      </form>

    </nav>
  )
}

export default Navigation;