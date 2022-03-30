import InfoPage from '@/components/InfoPage';
import { InfoPageProps } from '@/components/InfoPage/types';
import { NextPage } from 'next';
import policy from 'src/informations/pages/policy';

const Policy: NextPage = () => {
    const props: InfoPageProps = {
    headDescription: 'Politique de confidentialité privacy policy',
    pageTitle: 'Politique de confidentialité'
  }
  return  <InfoPage {... props}>{policy}</InfoPage>;
};

export default Policy;
