import { NextPage } from 'next';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styles from './InfoPage.module.scss';
import { InfoPageProps } from './types';

const InfoPage: NextPage<PropsWithChildren<InfoPageProps>> = ({ pageTitle, headDescription = "", children }) => {
  return <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={headDescription}
        />
      </Head>
    {children}
    </div>;
};

export default InfoPage;
