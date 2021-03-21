import NavBar from './navBar'

import introImage from './img/introImage.jpg'
import Introduction from './Introduction'
import Team from './Team'
import GetInTouch from './GetInTouch'
import Footer from './footer'
import FAQ from './FAQ'
import AboutUs from './AboutUs'
import Recommendations from './Recommendations'
import Call from './Call'
import WelcomeModal from './WelcomeModal'
import { SliderData } from './SliderData'

function Home() {
    return (
      <div className="App">
        <div>
            <NavBar />
            <WelcomeModal />
            <Call />
          <div className='Intro'>
            <img className='introImage' src={introImage} alt='Person meditating'></img>
          <Introduction></Introduction>
          </div>
          <AboutUs></AboutUs><br></br>
          <Team slides={SliderData}></Team>
          <Recommendations></Recommendations>
          <FAQ></FAQ>
          <GetInTouch></GetInTouch>
          <Footer></Footer>
        </div>
      </div>
    );
  }
  
  export default Home;