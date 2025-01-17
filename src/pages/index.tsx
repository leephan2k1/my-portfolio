import { ObjectId } from 'mongodb';
import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';
import Script from 'next/script';
import { Project, Skill } from 'types';
import DarkBanner from '~/components/partials/DarkBanner';
import LightBanner from '~/components/partials/LightBanner';
import About from '~/components/shared/About';
import ClientOnly from '~/components/shared/ClientOnly';
import Contact from '~/components/shared/Contact';
import Container from '~/components/shared/Container';
import Head from '~/components/shared/Head';
import Projects from '~/components/shared/Projects';
import Section from '~/components/shared/Section';
import Skills from '~/components/shared/Skills';
import { REVALIDATE_TIME } from '~/constant';
import { connectToDatabase } from '~/utils/connectDb';

import type { NextPage } from 'next';
import Timeline from '~/components/shared/Timeline';

interface HomeProps {
    desc: string;
    primary_skills: Skill[];
    secondary_skills: Skill[];
    projects: Project[];
    business_projects: Project[];
}

const Home: NextPage<HomeProps> = ({
    desc,
    projects,
    business_projects,
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

            <Head />

            <Container>
                <ClientOnly>
                    <Section sectionId="Banner">
                        {theme === 'light' ? <LightBanner /> : <DarkBanner />}
                    </Section>
                </ClientOnly>

                <Section sectionId="About">
                    <About desc={desc} />
                </Section>

                <Section sectionId="Timeline">
                    <Timeline />
                </Section>

                <Section sectionId="Skills">
                    <Skills
                        primary_skills={primary_skills}
                        secondary_skills={secondary_skills}
                    />
                </Section>

                <Section sectionId="Projects">
                    <Projects
                        header="Work Experience"
                        projects={business_projects.reverse()}
                    />
                </Section>
                <Section>
                    <Projects header="My Projects" projects={projects} />
                </Section>

                <Section sectionId="Contact">
                    <Contact />
                </Section>
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
