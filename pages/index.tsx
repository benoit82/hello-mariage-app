import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HomePage</title>
      </Head>
    </div>
  );
};

export default Home;
