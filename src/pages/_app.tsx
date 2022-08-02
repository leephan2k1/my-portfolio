import 'atropos/css';
import '~/styles/globals.scss';

import { ThemeProvider } from 'next-themes';
import { ReactElement, ReactNode } from 'react';
import MainLayout from '~/components/layouts/MainLayout';
import { FormContextProvider } from '~/context/FormContext';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

    return (
        <ThemeProvider attribute="class">
            <FormContextProvider>
                {getLayout(<Component {...pageProps} />)}
            </FormContextProvider>
        </ThemeProvider>
    );
}

export default MyApp;
