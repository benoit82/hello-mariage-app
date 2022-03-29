import InfoPage from '@components/InfoPage';
import { NextPage } from 'next';
import Head from 'next/head';
import policy from 'src/informations/policy';

const Policy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello Mariage - Politique de confidentialité</title>
        <meta
          name="description"
          content="Politique de confidentialité privacy policy"
        />
      </Head>
      <InfoPage>{policy}</InfoPage>
    </>
  );
};

export default Policy;
