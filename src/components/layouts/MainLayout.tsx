import { ReactNode } from 'react';
import Navbar from '~/components/partials/Navbar';
import Footer from '~/components/partials/Footer';
import { ScrollerMotion } from 'scroller-motion';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <ScrollerMotion>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </ScrollerMotion>
        </>
    );
}
