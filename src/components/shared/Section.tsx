import { forwardRef, ReactNode } from 'react';

interface SectionProps {
    style?: string;
    children?: ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ children, style }, ref) => {
        return (
            <section ref={ref} className={style}>
                {children}
            </section>
        );
    },
);

Section.displayName = 'Section';

export default Section;
