import { useEffect, useState } from "react";


export default function About() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const timer = setInterval(() => {
            setShow(true)
        }  , 2000)
        return () => {
            clearInterval(timer)
        }
    }, []) 
    return (
        <div className='h-[650px] w-[800px] justify-center'>
            <p className="text-white text-[40px] mt-32 font-Libre+Baskerville animate-fade-in">I'M <span className="text-[#a5fa04]">Aghbal Abdellah</span></p>
            <p className="text-white text-[40px] animate-fade-in">Full Stack Developer</p>
            <h1 className="text-white mt-16 font-bold text-[30px] animate-fade-in">About</h1>
            <div className="flex  ml-11 space-x-3 animate-fade-in">
                <h1 className="border-[3px] border-[#a5fa04] "></h1>
                <p className="text-white text-lg">I am a responsive full <span className="text-[#a5fa04]">stack developer</span>, eager to build fast and intuitive 
                    digital experiences. I love taking ideas and transforming them into applications that users can interact 
                    with and have an impact. I love putting together pieces of the puzzle to <span className="text-[#a5fa04]">solve problems</span> and paying
                     attention to details, delivering high-quality output!</p>
            </div>
            {show && (<button className="text-white animate-fade-move border-4 border-[#a5fa04]/40 p-2 mt-10 ml-11 text-[30px] rounded-lg">Contact Me</button>)}
            
        </div>
    );
}