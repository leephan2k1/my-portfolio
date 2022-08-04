import { ReactNode, useEffect, useState } from 'react';
import { ScrollerMotion } from 'scroller-motion';
import Footer from '~/components/partials/Footer';
import Navbar from '~/components/partials/Navbar';
import { useEffectOnce, useEventListener } from 'usehooks-ts';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffectOnce(() => {
        setIsMobile(window.innerWidth < 768);
    });

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    return (
        <>
            <header>
                <Navbar />
            </header>
            <ScrollerMotion disabled={isMobile}>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </ScrollerMotion>
        </>
    );
}
