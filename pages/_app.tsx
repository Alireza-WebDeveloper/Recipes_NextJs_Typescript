import Layout from '@/Components/Layout';
import PageProvider from '@/MuiTheme/helpers/PageProvider';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import { FavoriteProvider } from '@/Context/Favorite';
import FavoriteNotification from '@/Components/Portals/FavoriteNotification';
import Head from 'next/head';
import { AppProps } from 'next/app';
export default function App({
  Component,
  pageProps,
  emotionCache,
}: AppProps & { emotionCache: any }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="ورگانتی | دستور غذای جنوبی,آموزش آشپزی"
        />
      </Head>
      <PageProvider emotionCache={emotionCache}>
        <FavoriteProvider>
          <Layout>
            <Component {...pageProps} />
            <FavoriteNotification />
          </Layout>
        </FavoriteProvider>
      </PageProvider>
    </>
  );
}
