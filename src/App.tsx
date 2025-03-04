import './index.css';
import Header from './Header';
import MyPicture from './MyPicture';
import About from './About';
import RadarChart from './RadarChart';
import InfiniteScrollSkills from './infinitScrol';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='bg-black min-h-screen flex flex-col'>
        <Header />
        <section id="home" className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2'>
            <MyPicture imageUrl="/images/me.png" />
          </div>
          <div className='absolute lg:static z-10 top-0 left-0 w-full lg:w-1/2 h-full flex justify-center items-center'>
            <About />
          </div>
        </section>
        <section id="skills" className='flex flex-col justify-center items-center'>
          <h1 className='text-white text-5xl text-center mt-48'>Skills</h1>
          <div className='flex items-center w-full shadow-inner flex-col md:flex-row'>
            <div className='w-1/3 flex items-center h-96 relative md:ml-44'>
              <InfiniteScrollSkills />
              <div className='absolute w-full h-full z-50' style={{
                background: "linear-gradient(to left, rgba(0,0,0) 15%, transparent 30%, transparent 80%, rgba(0,0,0) 95%)"
              }} />
            </div>
            <div className='w-1/2'>
              <RadarChart />
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;