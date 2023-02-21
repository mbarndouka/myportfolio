import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/skills';
import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification';
import './App.css';

function App() {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </>
  );
}

export default App;
