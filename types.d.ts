import * as React from 'react';

declare module 'framer-motion' {
    export interface motion {
        children?: React.ReactNode;
    }
}

export interface Skill {
    skillCover: string;
    skillRef: string;
    skillTitle: string;
}

export interface PlxConfig {
    start: number | string;
    duration?: string | number;
    end: number | string;
    properties: {
        startValue: number | string;
        endValue: number | string;
        property: string;
    }[];
}

export interface Project {
    pjCover: string;
    pjTitle: string;
    pjDemo: string;
    pjGithub: string;
    pjDesc: string;
    pjStacks: {
        techCover: string;
        techTitle: string;
        techRef: string;
    }[];
}
