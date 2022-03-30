import InfoPage from '@/components/InfoPage';
import { InfoPageProps } from '@/components/InfoPage/types';
import { NextPage } from 'next';

const CGU: NextPage = () => {
  const props: InfoPageProps = {
    pageTitle: "Condition général d'utilisation",
    headDescription: "Condition général d'utilisation CGU",
  };

  const content: JSX.Element = (
    <div>
      <h1>CGU - Condition Général d&apos;Utilisation</h1>
      <p>
        Le présent document a pour objet de définir les modalités et conditions
        dans lesquelles d’une part, Hello Mariage , ci-après dénommé l’EDITEUR,
        met à la disposition de ses utilisateurs le site, et les services
        disponibles sur le site et d’autre part, la manière par laquelle
        l’utilisateur accède au site et utilise ses services. Toute connexion au
        site est subordonnée au respect des présentes conditions. Pour
        l’utilisateur, le simple accès au site de l’EDITEUR à l’adresse URL
        suivante https://www.hello-mariage.fr implique l’acceptation de
        l’ensemble des conditions décrites ci-après. Propriété intellectuelle
      </p>
      <p>
        Tous les éléments de ce site, y compris les documents téléchargeables,
        sont libres de droit. A l’exception de l’iconographie, la reproduction
        des pages de ce site est autorisée à la condition d’y mentionner la
        source. Elles ne peuvent être utilisées à des fins commerciales et
        publicitaires.
      </p>
    </div>
  );

  return <InfoPage {...props}>{content}</InfoPage>;
};

export default CGU;
