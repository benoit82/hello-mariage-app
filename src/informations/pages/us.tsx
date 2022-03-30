import { helloMariageTeam } from '@/informations/constants';
import React from 'react';

const us: JSX.Element = (
  <>
    <h1>Hello Mariage</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
      error suscipit aut nisi dolorem quaerat natus eius velit minus! Laborum
      magni quis vitae. Est culpa ad inventore nesciunt soluta quisquam velit?
      Quam, delectus esse? Facere vero voluptates quod non esse.
    </p>

    <h2>Notre équipe</h2>
    {helloMariageTeam.map(({ domain, name, gender, email }) => (
      <p key={email}>
        <span>{domain}</span>
        {' - '}
        <span>
          {gender === 'm' ? 'Monsieur' : 'Madame'} {name}
        </span>
        {' - '}
        <span>{email}</span>
      </p>
    ))}
  </>
);

export default us;
