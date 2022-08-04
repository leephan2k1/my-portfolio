import { ReactNode } from 'react';
import { ScrollerMotion } from 'scroller-motion';
import { useMediaQuery } from 'usehooks-ts';
import Footer from '~/components/partials/Footer';
import Navbar from '~/components/partials/Navbar';
import ClientOnly from '~/components/shared/ClientOnly';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const matchesMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <header>
                <Navbar />
            </header>
            {matchesMobile ? (
                <ClientOnly>
                    <main>{children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </ClientOnly>
            ) : (
                <ScrollerMotion>
                    <main>{children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </ScrollerMotion>
            )}
        </>
    );
}
