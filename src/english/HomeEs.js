import NavBar from './navBar'
import NavBarResponsive from './navBarResponsive'
import Introduction from './Introduction'
import Team from './Team'
import TeamR from './TeamR'
import GetInTouch from './GetInTouch'
import Footer from './footer'
import FAQ from './FAQ'
import AboutUs from './AboutUs'
import Recommendations from './Recommendations'
import Call from './Call'
import Doxy from './doxy'
import WelcomeModal from './WelcomeModal'
import { SliderData } from './SliderData'


function HomeES() {
    return (
      <div className="App">
        <div>
          <h1>Hola</h1>
            <NavBar />
            <NavBarResponsive />
            <WelcomeModal />
            <Doxy />
{/*             <Call /> */}
          <Introduction></Introduction>
          <AboutUs></AboutUs><br></br>
          
          <Team slides={SliderData}></Team>
          <TeamR slides={SliderData}></TeamR>
          <Recommendations></Recommendations>
          <FAQ></FAQ>
          <Footer></Footer>
        </div>
      </div>
    );
  }
  
  export default HomeES;