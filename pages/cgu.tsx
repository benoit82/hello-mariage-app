import InfoPage from '@/components/InfoPage';
import { InfoPageProps } from '@/components/InfoPage/types';
import { NextPage } from 'next';
import cgu from 'src/informations/pages/cgu';

const CGU: NextPage = () => {
  const props: InfoPageProps = {
    pageTitle: "Condition général d'utilisation",
    headDescription: "Condition général d'utilisation CGU",
  };
  return <InfoPage {...props}>{cgu}</InfoPage>;
};

export default CGU;
