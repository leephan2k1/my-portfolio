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
