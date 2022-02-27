import './Navigation.scss';
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg"

function Navigation() {
  return (
    <div>
    <nav className='nav'>
        <a href="/" className="nav__logo-link">
            <img src={logo} className="nav__logo" alt="logo" />
        </a>
        <form className="nav__form">
            <input type="txt" placeholder="Search" className="nav__form-search" />
            <img className="nav__form-image avatar" src={avatar} alt="Mohan Muruge"/>
            <button className="nav__form-button">UPLOAD</button>
        </form>
    </nav>
    </div>
  )
}

export default Navigation;