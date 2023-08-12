import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/skills';
// import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './App.css';
import Scrollup from './components/scrollup/Scrollup';


function App() {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <Scrollup/>
    </>
  );
}

export default App;
