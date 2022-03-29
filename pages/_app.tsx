import '@styles/globals.scss';
import style from '@styles/App.module.scss';
import type { AppProps } from 'next/app';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import { NavLink } from '@interfaces/index';
import Link from 'next/link';



function MyApp({ Component, pageProps }: AppProps) {
  const footerLinks: NavLink[] = [
    {label: "CGU", href: "/cgu" },
    {label: "Police de confidentialité", href: "/policy" },
  ];

  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Component {...pageProps} />

      <div className={style.footer}>
        <ul className={style.footerLinks}>
          {footerLinks.map(({label, href}, index) => <li key={index}><Link href={href} passHref><a>{label}</a></Link></li>)}
        </ul>
      </div>
    </div>
  );
}

export default MyApp;
