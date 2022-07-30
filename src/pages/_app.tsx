import '~/styles/globals.scss';

import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import MainLayout from '~/components/layouts/MainLayout';

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
            {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
    );
}

export default MyApp;
