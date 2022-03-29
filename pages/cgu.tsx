import InfoPage from '@components/InfoPage';
import { NextPage } from 'next';
import Head from 'next/head';
import cgu from 'src/informations/cgu';

const CGU: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello Mariage - Politique de confidentialité</title>
        <meta
          name="description"
          content="Politique de confidentialité privacy policy"
        />
      </Head>
      <InfoPage>{cgu}</InfoPage>
    </>
  );
};

export default CGU;
