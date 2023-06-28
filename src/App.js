import Navigation from './Navigation'
import './App.css';
import LandingCarousel from './LandingCarousel';
import Safety from './Safety';
import Explore from './Explore';
import Marquis from "./marquis";
import Experience from './Experience';
import News from './News';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <LandingCarousel/>
      <Safety/>
      <Explore/>
      <Marquis/>
      <Experience/>
      <News/>
      <Footer/>
      
    </div>
  );
}

export default App;
