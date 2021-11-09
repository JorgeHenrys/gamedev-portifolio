import AboutMe from "./components/AboutMe";
import Arts from "./components/Arts";
import BackgroundParallax from "./components/BackgroundParallax";
import Games from "./components/Games";
import Header from "./components/Header";
import './styles/global.css'

function App() {
  return (
      <div className="container">
        <Header />
        <BackgroundParallax />
        <AboutMe />
        <Games />
        <Arts />
      </div>
    
  );
}

export default App;
