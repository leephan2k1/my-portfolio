import React from 'react';

interface SkillItemProps {
    src: string;
    title: string;
    link: string;
}

export default function SkillItem({ src, title, link }: SkillItemProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center"
        >
            <img
                className="hover:scale-[110%] transition-all duration-300 w-32 h-32"
                src={src}
                alt="html-icon"
            />
            <h3>{title}</h3>
        </a>
    );
}
