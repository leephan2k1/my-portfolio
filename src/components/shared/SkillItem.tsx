import React from 'react';

interface SkillItemProps {
    src: string;
    coverWrapper?: boolean;
    isBlackIcon?: boolean;
    title: string;
    link: string;
    styleImg?: string;
    styleTitle?: string;
}

export default function SkillItem({
    src,
    title,
    coverWrapper,
    isBlackIcon,
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
                className={`hover:scale-[110%] transition-all duration-300 ${
                    isBlackIcon && 'bg-gray-400'
                } ${styleImg} ${coverWrapper && 'p-2 rounded-full'}`}
                src={src}
                alt="html-icon"
            />
            <h3 className={styleTitle}>{title}</h3>
        </a>
    );
}
