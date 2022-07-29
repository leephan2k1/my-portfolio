import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="flex min-h-screen flex-col mx-auto overflow-x-hidden dark:bg-[#000000] font-primary">
            {children}
        </div>
    );
}
