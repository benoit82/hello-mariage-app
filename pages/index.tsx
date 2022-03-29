import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HomePage</title>
      </Head>
      <h1>welcome to next.js!</h1>
    </div>
  );
};

export default Home;
