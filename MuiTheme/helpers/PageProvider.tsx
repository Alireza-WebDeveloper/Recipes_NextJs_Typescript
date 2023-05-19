import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as PreferredThemeProvider } from 'next-themes';
import Head from 'next/head';
import createEmotionCache from '../theme/createEmotionCache';
import MUIThemeProvider from './MUIThemeProvider';

const clientSideEmotionCache = createEmotionCache();

const PageProvider = ({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode;
  emotionCache: any;
}) => (
  <PreferredThemeProvider>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </CacheProvider>
  </PreferredThemeProvider>
);

export default PageProvider;
