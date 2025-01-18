

export default function MySideBar() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex items-center gap-9">
            <button 
                onClick={() => scrollToSection('home')} 
                className='text-white hover:text-[#a5fa04] transition-colors duration-300'
            >
                Home
            </button>
            <button 
                onClick={() => scrollToSection('skills')} 
                className='text-white hover:text-[#a5fa04] transition-colors duration-300'
            >
                Skills
            </button>
            <button 
                onClick={() => scrollToSection('projects')} 
                className='text-white hover:text-[#a5fa04] transition-colors duration-300'
            >
                Projects
            </button>
            <button 
                onClick={() => scrollToSection('contact')} 
                className='text-white hover:text-[#a5fa04] transition-colors duration-300'
            >
                Contact
            </button>
        </div>
    );
}