import NavBar from './navBar'
import Introduction from './Introduction'
import Team from './Team'
import GetInTouch from './GetInTouch'
import Footer from './footer'
import FAQ from './FAQ'
import AboutUs from './AboutUs'
import Recommendations from './Recommendations'
import Call from './Call'
import Doxy from './doxy'
import WelcomeModal from './WelcomeModal'
import { SliderData } from './SliderData'

function Home() {
    return (
      <div className="App">
        <div>
            <NavBar />
            <WelcomeModal />
            <Doxy />
            <Call />
          <Introduction></Introduction>
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