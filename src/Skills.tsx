


export default function Skills() {
    return (
        <div className='w-screen  bg-black flex justify-center flex-col items-center space-y-8'>
            <h1 className="text-white text-[40px] font-bold">My Skills</h1>
            <div className="flex justify-center gap-3 border border-red-700 w-[600px] h-[500px]">
                <div className="w-[50px]  h-[50px] animate-an-skills bg-[#262b1f] hover:shadow-lg hover:shadow-[#a5fa04] rounded-[20px]"
                 style={{ animationDelay: "0s" }}
                ></div>
                
                <div className="w-[50px]  h-[50px] animate-an-skills bg-[#262b1f] hover:shadow-lg hover:shadow-[#a5fa04] rounded-[20px]"
                 
                ></div>
                
                <div className="w-[50px]  h-[50px] animate-an-skills bg-[#262b1f] hover:shadow-lg hover:shadow-[#a5fa04] rounded-[20px]"
                 style={{ animationDelay: "2s" }}
                ></div>
                
                <div className="w-[50px]  h-[50px] animate-an-skills bg-[#262b1f] hover:shadow-lg hover:shadow-[#a5fa04] rounded-[20px]"
                 style={{ animationDelay: "3s" }}
                ></div>
                <div className="flex items-center flex-col">

                </div>
                
            </div>
            
        </div>
    );
}