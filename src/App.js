import './App.css';
import ButtonAppBar from './navBar'
import ButtonAppBar1 from './navBarLanguages'
import headerOption1 from './img/headerOption1.png'
import introImage from './img/introImage.jpg'
import Introduction from './Introduction'

function App() {
  return (
    <div className="App">
      <div className='NavBar'>
      <img src={headerOption1} alt='header'></img>
      <ButtonAppBar className='upHeader'></ButtonAppBar>
      <ButtonAppBar1 className='downHeader'></ButtonAppBar1>
      </div>
      <div className='Intro'>
        <img className='introImage' src={introImage} alt='Person meditating'></img>
      <Introduction></Introduction>
      </div>
      
    </div>
  );
}

export default App;
