import './index.css'
import Header from './Header'
import MyPicture from './MyPicture'
import About from './About'
import Skills from './Skills'

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
      <div className='relative flex flex-col lg:flex-row justify-center items-center'>
        <div className='w-full lg:w-1/2'>
          <MyPicture imageUrl="/images/me.png" />
        </div>
        <div className='absolute lg:static z-10 top-0 left-0 w-full lg:w-1/2 h-full flex justify-center items-center'>
          <Skills />
        </div>
      </div>
     </div>
  )
}

export default App