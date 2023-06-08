import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skils from './Skils';
import Projects from './Projects';
import Contact from './Contact';
import Fother from './Fother';
import End from './End';
import './App.css';





function App() {
  return (
    <div className="App">

        <Navbar />
        <Home />
        <About/>
        <Skils/>
        <Projects/>
        <Contact/>
        <Fother/>
        <End/>
     
       


    </div>
  );
}

export default App;