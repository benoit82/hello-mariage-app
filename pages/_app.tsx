import '@styles/globals.scss';
import style from '@styles/App.module.scss';
import type { AppProps } from 'next/app';
import Navbar from '@components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Component {...pageProps} />

      <div>
        <p>footer</p>
      </div>
    </div>
  );
}

export default MyApp;
