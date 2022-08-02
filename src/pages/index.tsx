import { ObjectId } from 'mongodb';
import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';
import Script from 'next/script';
import { useCallback, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ScrollerMotion } from 'scroller-motion';
import { Project, Skill } from 'types';
import DarkBanner from '~/components/partials/DarkBanner';
import LightBanner from '~/components/partials/LightBanner';
import About from '~/components/shared/About';
import ClientOnly from '~/components/shared/ClientOnly';
import Contact from '~/components/shared/Contact';
import Container from '~/components/shared/Container';
import Projects from '~/components/shared/Projects';
import Section from '~/components/shared/Section';
import Skills from '~/components/shared/Skills';
import { REVALIDATE_TIME } from '~/constant';
import { connectToDatabase } from '~/utils/connectDb';
import useFormState from '~/context/FormContext';

import type { NextPage } from 'next';
interface HomeProps {
    desc: string;
    primary_skills: Skill[];
    secondary_skills: Skill[];
    projects: Project[];
}

const Home: NextPage<HomeProps> = ({
    desc,
    projects,
    primary_skills,
    secondary_skills,
}) => {
    const { theme } = useTheme();
    const frmState = useFormState();

    useEffect(() => {
        if (frmState?.formState === 'succeeded') {
            toast.success('Sent successfully', {
                style: {
                    zIndex: 999,
                },
            });
        }

        if (frmState?.formState === 'error') {
            toast.error('Oops! Please try again in a few minutes', {
                style: {
                    zIndex: 999,
                },
                duration: 3000,
            });
        }
    }, [frmState]);

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
                strategy="beforeInteractive"
            />
            <ScrollerMotion>
                <Container>
                    <ClientOnly>
                        <Section sectionId="Banner">
                            {theme === 'light' ? (
                                <LightBanner />
                            ) : (
                                <DarkBanner />
                            )}
                        </Section>
                    </ClientOnly>

                    <Section sectionId="About">
                        <About desc={desc} />
                    </Section>

                    <Section sectionId="Skills">
                        <Skills
                            primary_skills={primary_skills}
                            secondary_skills={secondary_skills}
                        />
                    </Section>

                    <Section sectionId="Projects">
                        <Projects projects={projects} />
                    </Section>

                    <Section sectionId="Contact">
                        <Contact />
                    </Section>
                </Container>
            </ScrollerMotion>
            <Toaster position="top-center" />
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
