import Atropos from 'atropos/react';
import { FaGithub } from 'react-icons/fa';
import { Project } from 'types';

import { ExternalLinkIcon } from '@heroicons/react/outline';

import SkillItem from './SkillItem';

interface ProjectItemProps {
    reverse?: boolean;
    project: Project;
}

export default function ProjectItem({ reverse, project }: ProjectItemProps) {
    return (
        <div
            className={`flex ${
                reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }  flex-col-reverse w-full overflow-hidden`}
        >
            <div className="min-w-[30%] flex flex-col absolute-center space-y-2 md:px-4">
                <h2 className="text-4xl font-bold mt-8 lg:my-0 text-center">
                    {project?.pjTitle}
                </h2>
                <p className="md:px-0 px-2 text-center dark:text-gray-300">
                    {project?.pjDesc}
                </p>
                <h3 className="font-semibold">Tech stack:</h3>
                <div className="absolute-center w-full flex-wrap space-x-4">
                    {project?.pjStacks.length &&
                        project?.pjStacks.map((tech) => {
                            return (
                                <SkillItem
                                    src={tech.techCover}
                                    title={tech.techTitle}
                                    link={tech.techRef}
                                    styleTitle="text-xl"
                                    styleImg="w-28 h-28"
                                />
                            );
                        })}
                </div>
                <div className="flex py-6 space-x-6">
                    <a href={project.pjDemo} target="_blank" rel="noreferrer">
                        <button className="shadow-lg space-x-2 flex p-4 bg-blue-500 text-white rounded-lg hover:scale-[110%] transition-all duration-300">
                            <ExternalLinkIcon className="w-8 h-8" />
                            <small>Live Demo</small>
                        </button>
                    </a>
                    <a href={project.pjGithub} target="_blank" rel="noreferrer">
                        <button className="shadow-lg space-x-2 flex p-4 bg-gray-500 text-white rounded-lg hover:scale-[110%] transition-all duration-300">
                            <FaGithub className="w-8 h-8" />
                            <small>View Github</small>
                        </button>
                    </a>
                </div>
            </div>

            <div className="relative min-w-[70%] hover:scale-[90%] transition-all duration-300">
                <Atropos shadow={false}>
                    <div className="absolute -inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl"></div>
                    <figure className="relative flex items-center aspect-video p-1">
                        <img
                            className="rounded-2xl w-full h-full"
                            src={project.pjCover}
                            alt={project.pjTitle}
                        />
                    </figure>
                </Atropos>
            </div>
        </div>
    );
}
