
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";

export default function Projects() {
    return (
        <div className="flex flex-col items-center space-y-8 h-full">
            <h1 className="text-4xl text-center text-white">Projects</h1>
            <div className="grid gap-24 grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
                
                {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    image={project.image}
                    projectName={project.projectName}
                    description={project.description}
                    frameworks={project.frameworks}
                    projectLink={project.projectLink}
                />
            ))}
                </div>
        </div>
    );
}