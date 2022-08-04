import { ReactNode } from 'react';
import { ScrollerMotion } from 'scroller-motion';
import Footer from '~/components/partials/Footer';
import Navbar from '~/components/partials/Navbar';

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
