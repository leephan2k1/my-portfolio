import { ObjectId } from 'mongodb';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';
import Script from 'next/script';
import { ScrollerMotion } from 'scroller-motion';
import { Skill } from 'types';
import DarkBanner from '~/components/partials/DarkBanner';
import LightBanner from '~/components/partials/LightBanner';
import About from '~/components/shared/About';
import ClientOnly from '~/components/shared/ClientOnly';
import Container from '~/components/shared/Container';
import Projects from '~/components/shared/Projects';
import Section from '~/components/shared/Section';
import Skills from '~/components/shared/Skills';
import { REVALIDATE_TIME } from '~/constant';
import { connectToDatabase } from '~/utils/connectDb';

interface HomeProps {
    desc: string;
    primary_skills: Skill[];
    secondary_skills: Skill[];
}

const Home: NextPage<HomeProps> = ({
    desc,
    primary_skills,
    secondary_skills,
}) => {
    const { theme } = useTheme();

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
                strategy="beforeInteractive"
            />
            <ScrollerMotion>
                <Container>
                    <ClientOnly>
                        <Section>
                            {theme === 'light' ? (
                                <LightBanner />
                            ) : (
                                <DarkBanner />
                            )}
                        </Section>
                    </ClientOnly>

                    <Section>
                        <About desc={desc} />
                    </Section>

                    <Section>
                        <Skills
                            primary_skills={primary_skills}
                            secondary_skills={secondary_skills}
                        />
                    </Section>

                    <Section>
                        <Projects />
                    </Section>
                </Container>
            </ScrollerMotion>
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
