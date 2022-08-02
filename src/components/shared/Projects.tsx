import { Project } from 'types';

import ProjectItem from './ProjectItem';

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <div className="w-full min-h-[500px] my-32">
            <h1 className="text-center text-6xl font-secondary">My Projects</h1>
            <div className="w-full mx-auto md:px-40 my-20 space-y-20 lg:space-y-48">
                {projects &&
                    projects.length &&
                    projects.map((project, index) => {
                        return (
                            <ProjectItem
                                reverse={index % 2 !== 0}
                                project={project}
                                key={project.pjTitle}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
