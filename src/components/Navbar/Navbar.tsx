import { FC } from 'React';

import style from './Navbar.module.scss';

const Navbar: FC = () => {
  const link: string = 'link';

  return (
    <div className={style.navbarContainer}>
      <ul>
        <li>{link} 1</li>
        <li>{link} 2</li>
      </ul>
    </div>
  );
};

export default Navbar;
