interface ProjectCardProps {
    image: string;
    projectName: string;
    description: string;
    frameworks: string[];
    projectLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    image, 
    projectName, 
    description, 
    frameworks,
    projectLink 
}) => {
    return (
        <div className="w-[300px] h-[440px] bg-[#243505] rounded-lg relative overflow-hidden group
            transition-all duration-300 
            hover:rotate-3 
            hover:scale-105 
            hover:brightness-110 
            hover:shadow-[0_0_40px_rgba(165,250,4,0.3)]
            hover:before:scale-100 
            before:absolute 
            before:inset-0 
            before:scale-0 
            before:transition-transform 
            before:duration-500 
            before:border-2 
            before:border-[#a5fa04]">
            
            <div className="w-full h-1/2 overflow-hidden">
                <img 
                    src={image} 
                    alt={projectName} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-[#243505] transition-all duration-300 
                group-hover:h-[85%] h-1/2">
                
                <div className="p-4 text-white h-full overflow-y-auto scrollbar-hide">
                    <h3 className="text-[#a5fa04] text-xl font-bold mb-2">
                        {projectName}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed mb-1 
                        line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {frameworks.map((framework, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 text-xs bg-[#a5fa04]/20 text-[#a5fa04] rounded-full"
                            >
                                {framework}
                            </span>
                        ))}
                    </div>

                    {projectLink && (
                        <button 
                            onClick={() => window.open(projectLink, '_blank')}
                            className="mt-3 px-4 py-2 bg-[#a5fa04]/20 text-[#a5fa04] rounded-lg
                                hover:bg-[#a5fa04] hover:text-[#243505] transition-all duration-300
                                flex items-center gap-2 text-sm font-medium"
                        >
                            View Project
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;