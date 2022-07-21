import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}
//className="flex min-h-screen flex-col items-center justify-center py-2"

export default function Container({ children }: ContainerProps) {
    return (
        <div className="flex min-h-screen flex-col  mx-auto overflow-x-hidden">
            {children}
        </div>
    );
}
