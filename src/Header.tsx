import MySideBar from './MySideBar';

export default function Header() {
    return (
        <div className='bg-black h-16 flex justify-around items-center fixed w-screen z-50'>
            <img 
            src="/images/Logo.png" 
            alt="AG Logo" 
            className="ml-10 w-10 md:w-15 lg:w-20 object-contain" 
            />
            <MySideBar />
        </div>
    )
}