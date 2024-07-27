import {
    AcademicCapIcon,
    BookOpenIcon,
    BriefcaseIcon,
} from '@heroicons/react/outline';
import { useEffect } from 'react';
import { TimeLineCard } from './TimeLineCard';

export default function Timeline() {
    useEffect(() => {
        const cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            card.addEventListener('mousemove', handleMouseMove);
        });

        function handleMouseMove(e: any) {
            //@ts-ignore
            const rect = this.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

            angle = (angle + 360) % 360;

            //@ts-ignore
            this.style.setProperty('--start', angle + 60);
        }
    }, []);

    return (
        <div className="px-4 dark:text-white text-gray-900 dark:bg-gray-950">
            <div className="tree-wrapper relative md:w-[10px] min-h-[50vh] md:mx-auto ">
                <TimeLineCard
                    icon={<BookOpenIcon className="w-8 h-8" />}
                    title="2019"
                    desc={[
                        'Started studying software engineering at Can Tho University',
                    ]}
                />

                <TimeLineCard
                    icon={<AcademicCapIcon className="w-8 h-8" />}
                    title="2023"
                    desc={[
                        'Graduated with excellence with a GPA of 4.6',
                        'Honed English skills with a TOEIC score of 800',
                        'Intern at TPS Software',
                    ]}
                />

                <TimeLineCard
                    icon={<BriefcaseIcon className="w-8 h-8" />}
                    title="2024 - now"
                    desc={['Full stack web developer']}
                />
            </div>
        </div>
    );
}
