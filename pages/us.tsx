import InfoPage from '@/components/InfoPage';
import { InfoPageProps } from '@/components/InfoPage/types';
import { helloMariageTeam } from '@/utils/constants';
import { NextPage } from 'next';

const Us: NextPage = () => {
  const props: InfoPageProps = {
    pageTitle: 'Notre entreprise',
    headDescription: 'notre entreprise who are we description',
  };

  const content: JSX.Element = (
    <>
      <h1>Hello Mariage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        error suscipit aut nisi dolorem quaerat natus eius velit minus! Laborum
        magni quis vitae. Est culpa ad inventore nesciunt soluta quisquam velit?
        Quam, delectus esse? Facere vero voluptates quod non esse.
      </p>

      <h2>Notre équipe</h2>
      <ul>
        {helloMariageTeam.map(({ domain, name, gender, email }) => (
          <li key={email}>
            <span>{domain}</span>
            {' - '}
            <span>
              {gender === 'm' ? 'Monsieur' : 'Madame'} {name}
            </span>
            {' - '}
            <span>{email}</span>
          </li>
        ))}
      </ul>
    </>
  );

  return <InfoPage {...props}>{content}</InfoPage>;
};

export default Us;
