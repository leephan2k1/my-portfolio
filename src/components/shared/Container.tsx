interface ContainerProps {
    children: ReactNode;
}

import { forwardRef, ReactNode } from 'react';

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children }, ref) => {
        return (
            <div
                ref={ref}
                className="flex min-h-screen flex-col mx-auto overflow-x-hidden dark:bg-[#000000] font-primary"
            >
                {children}
            </div>
        );
    },
);

Container.displayName = 'Container';

export default Container;
