import React, { useState } from 'react';


const InfiniteScrollSkills: React.FC = () => {
  const AllSkils = [
    '/images/javascript.png' ,
    '/images/typescript.png' ,
    '/images/react.png' ,
    '/images/C++.png' ,
    '/images/CSS.png' ,
    '/images/html.png' ,
    '/images/python.png' ,
    '/images/C.png' ,
    '/images/docker.png' ,
    '/images/git.png' ,
    '/images/bash.png' ,
    '/images/tailwind-css.png' ,
    '/images/nextjs.png' ,
    '/images/django.png' ,
    '/images/nginx.png' ,
  ];
  const skills = Array.from({ length: AllSkils.length * 10}).map((_, index) => AllSkils[index % AllSkils.length]);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="w-full overflow-hidden">
        <span className='text-white'>
            {skills.length}
            </span>
      <div
        className={`flex animate-scroll ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 px-4 py-2 flex items-center justify-center"
          >
                <img
                src={skill as  string} 
                alt={`Skill ${index + 1}`}
                width={60} // Width of the image
                height={60} // Height of the image
                // objectFit="contain" // To maintain aspect ratio
                />
          </div>
        ))}
        {/* Duplicate the skills for seamless scrolling */}
      </div>
    </div>
  );
};

export default InfiniteScrollSkills;
