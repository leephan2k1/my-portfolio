import { nanoid } from 'nanoid';
import Plx from 'react-plx';
import { Skill } from 'types';
import SkillItem from '~/components/shared/SkillItem';
import { blackIcons, coverWrappers, skillDescPlx } from '~/constant';
import { memo } from 'react';

interface SkillsProps {
    primary_skills: Skill[];
    secondary_skills: Skill[];
}

function Skills({ primary_skills, secondary_skills }: SkillsProps) {
    return (
        <div className="w-full min-h-[500px] pt-20 pb-32">
            <div className="flex flex-col py-2 px-6 items-center h-fit lg:w-[40%] md:w-3/4 mx-auto space-y-6">
                <Plx parallaxData={skillDescPlx}>
                    <h1 className="font-secondary font-semibold text-4xl">
                        My Skills
                    </h1>
                </Plx>
                <Plx parallaxData={skillDescPlx}>
                    <h2 className="font-extralight text-2xl my-4">Focus on</h2>
                </Plx>
                <div className="flex gap-y-8 flex-wrap justify-center w-full h-fit gap-x-6 md:gap-x-8">
                    {primary_skills.map((skill) => {
                        return (
                            <SkillItem
                                key={nanoid(5)}
                                src={skill.skillCover}
                                title={skill.skillTitle}
                                link={skill.skillRef}
                                styleImg="w-32 h-32"
                            />
                        );
                    })}
                </div>

                <Plx parallaxData={skillDescPlx}>
                    <h2 className="font-extralight text-2xl mt-8 mb-6">
                        Able to adapt
                    </h2>
                </Plx>
                <div className="flex gap-y-8 flex-wrap justify-center w-full h-fit gap-x-6 md:gap-x-8">
                    {secondary_skills.map((skill) => {
                        return (
                            <SkillItem
                                coverWrapper={coverWrappers.includes(
                                    skill.skillTitle,
                                )}
                                isBlackIcon={blackIcons.includes(
                                    skill.skillTitle,
                                )}
                                key={nanoid(5)}
                                src={skill.skillCover}
                                title={skill.skillTitle}
                                link={skill.skillRef}
                                styleImg="w-32 h-32"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default memo(Skills);
