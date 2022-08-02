import React from 'react';

interface SkillItemProps {
    src: string;
    title: string;
    link: string;
    styleImg?: string;
    styleTitle?: string;
}

export default function SkillItem({
    src,
    title,
    link,
    styleImg,
    styleTitle,
}: SkillItemProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center"
        >
            <img
                className={`hover:scale-[110%] transition-all duration-300 ${styleImg}`}
                src={src}
                alt="html-icon"
            />
            <h3 className={styleTitle}>{title}</h3>
        </a>
    );
}
