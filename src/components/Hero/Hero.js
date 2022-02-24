import './Hero.scss';

function Hero() {
  return (

    <section className="hero">
        <div className="hero__video-section">
            <img className="hero__video" src="./src/assets" alt="hero video image" />
        { /*<!-- <icons from https://www.freecodecamp.org/news/how-to-use-react-icons/> -->*/}
        </div>
        <h1 className="hero__heading">BMX Rampage: 2021 Highlights</h1>
        <div className="hero__information">
            <h2>By Red Crow</h2>
            <h3 className="hero__information-date">07/11/2021</h3>
            <img className="hero__information-views hero__icon" src="./src/assets/Icons/views.svg" alt="" />
            <h3 className="hero__information-views">1,001,023</h3>
            <img className="hero__information-likes hero__icon" src="./src/assets/Icons/likes.svg" alt="" />
            <h3 className="hero__information-likes">110,985</h3>
        </div>
        <div className="hero__description">
            <p className="hero__description-paragraph">
                On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels,
                unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before
                the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event
                for the second time -- eight years after his first Red Cow Rampage title
            </p>
        </div>
    </section>

  )
}

export default Hero;

