import { ReactNode } from 'react';
import { ScrollerMotion } from 'scroller-motion';
import Footer from '~/components/partials/Footer';
import Navbar from '~/components/partials/Navbar';
import { useMediaQuery } from 'usehooks-ts';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const matchesMediumUpScreen = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <header>
                <Navbar />
            </header>
            <ScrollerMotion disabled={!matchesMediumUpScreen}>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </ScrollerMotion>
        </>
    );
}
