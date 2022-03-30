import InfoPage from '@/components/InfoPage';
import { InfoPageProps } from '@/components/InfoPage/types';
import us from '@/informations/pages/us';
import { NextPage } from 'next';

const Us: NextPage = () => {
  const props: InfoPageProps = {
    pageTitle: 'Notre entreprise',
    headDescription: 'notre entreprise who are we description',
  };
  return <InfoPage {...props}>{us}</InfoPage>;
};

export default Us;
