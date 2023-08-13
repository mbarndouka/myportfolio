import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/skills';
// import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Portfolio from './components/portfolio/Portfolio';


import './App.css';
import Pitch from './components/ElevatorPitch/Pitch';


function App() {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Pitch/>
        {/* <Services /> */}
        <Qualification />
        <Portfolio/>
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <Scrollup/>
    </>
  );
}

export default App;
