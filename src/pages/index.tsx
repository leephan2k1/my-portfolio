import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';
import Script from 'next/script';
import DarkBanner from '~/components/partials/DarkBanner';
import LightBanner from '~/components/partials/LightBanner';
import About from '~/components/shared/About';
import ClientOnly from '~/components/shared/ClientOnly';
import Container from '~/components/shared/Container';
import Section from '~/components/shared/Section';
import SmoothScroll from '~/components/shared/SmoothScroll';
import { REVALIDATE_TIME } from '~/constant';
import { connectToDatabase } from '~/utils/connectDb';
import { ObjectId } from 'mongodb';

interface HomeProps {
    desc: string;
}

const Home: NextPage<HomeProps> = ({ desc }) => {
    const { theme } = useTheme();

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

                        <Section>
                            <About desc={desc} />
                        </Section>
                    </SmoothScroll>
                </ClientOnly>
            </Container>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { db } = await connectToDatabase();
    const objId = new ObjectId(process.env.DESC_MONGO_OBJECT_ID);

    const data = await db.collection('description').findOne({ _id: objId });

    const { _id, ...rest } = data;

    return {
        props: rest,
        revalidate: REVALIDATE_TIME,
    };
};

export default Home;
