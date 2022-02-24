import './Navigation.scss';

function Navigation() {
  return (
    <nav>
        <a className="nav__logo">
            <img src="./src/assets/Logo/BrainFlix-logo.svg" className="logo" alt="logo" />
        </a>
        <form className="nav__form">
            <input type="txt" placeholder="search" className="nav__form-search" />
            <button className="nav__button">UPLOAD</button>
            <img className="nav__form-image" src="./src/assets/Images/Mohan-muruge.jpg" alt="Mohan Muruge image"/>
        </form>
    </nav>
  )
}

export default Navigation;