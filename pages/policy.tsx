import InfoPage from '@components/InfoPage';
import { InfoPageProps } from '@components/InfoPage/types';
import { NextPage } from 'next';
import policy from 'src/informations/policy';

const Policy: NextPage = () => {
    const props: InfoPageProps = {
    headDescription: 'Politique de confidentialité privacy policy',
    pageTitle: 'Hello Mariage - Politique de confidentialité'
  }
  return  <InfoPage {... props}>{policy}</InfoPage>;
};

export default Policy;
