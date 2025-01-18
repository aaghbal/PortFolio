import MySideBar from './MySideBar';

export default function Header() {
    return (
        <div className='bg-black h-16 flex justify-around items-center fixed w-screen z-50'>
            <h1 className='text-white ml-10 text-3xl'>AG</h1>
            <MySideBar />
        </div>
    )
}