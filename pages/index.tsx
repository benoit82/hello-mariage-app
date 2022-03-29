import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Mariage - votre organisateur évènementiel</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

        <h1>Mariage à thème et sur mesure</h1>
        <p className={styles.description}>Construisons ensemble votre projet</p>
    </div>
  );
};

export default Home;
