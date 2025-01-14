import './index.css'
import Header from './Header'
import MyPicture from './MyPicture'
import About from './About'
// import Skills from './Skills'
import RadarChart from './RadarChart';
import InfiniteScrollSkills from './infinitScrol';
import Projects from './Projects';



function App() {
  return (
     <div className='bg-black min-h-screen w-screen flex flex-col'>
      <Header />
      <div className='relative flex flex-col lg:flex-row justify-center items-center'>
        <div className='w-full lg:w-1/2'>
          <MyPicture imageUrl="/images/me.png" />
        </div>
        <div className='absolute lg:static z-10 top-0 left-0 w-full lg:w-1/2 h-full flex justify-center items-center'>
          <About />
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-white text-5xl text-center mt-10'>Skills</h1>
        <div className='flex items-center w-full shadow-inner  -red-500 flex-col md:flex-row' >
          <div className='w-1/3  -yellow-300 flex items-center h-96  relative md:ml-44'>
            <InfiniteScrollSkills />
            <div className='absolute  w-full h-full z-50' style={{
              background: "linear-gradient(to left, rgba(0,0,0) 15%, transparent 30%, transparent 80%, rgba(0,0,0) 95%)"
            }}/>
          </div>
          <div className='w-1/2  -green-300'>
          <RadarChart />
          </div>
        </div>
      </div>
      <Projects />
     </div>
  )
}

export default App