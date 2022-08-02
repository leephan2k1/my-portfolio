import { forwardRef, ReactNode } from 'react';

interface SectionProps {
    style?: string;
    sectionId?: string;
    children?: ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ children, style, sectionId }, ref) => {
        return (
            <section
                id={sectionId ? sectionId : ''}
                ref={ref}
                className={style}
            >
                {children}
            </section>
        );
    },
);

Section.displayName = 'Section';

export default Section;
