import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Script from 'next/script';
import DarkBanner from '~/components/partials/DarkBanner';
import LightBanner from '~/components/partials/LightBanner';
import Container from '~/components/shared/Container';
import Section from '~/components/shared/Section';
import ClientOnly from '~/components/shared/ClientOnly';
import SmoothScroll from '~/components/shared/SmoothScroll';

const Home: NextPage = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
                strategy="beforeInteractive"
            />

            <Container>
                <ClientOnly>
                    <SmoothScroll>
                        <Section>
                            {theme === 'light' ? (
                                <LightBanner />
                            ) : (
                                <DarkBanner />
                            )}
                        </Section>

                        <LightBanner />
                    </SmoothScroll>
                </ClientOnly>
            </Container>
        </>
    );
};

export default Home;
