import { FC, useState } from 'React';
import classNames from 'classnames';

import style from './Navbar.module.scss';

const Navbar: FC = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  const navBarBtnHander = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className={style.navbarContainer}>
      <ul className={classNames(style.linkList)}>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
      <button className={style.navBarBtn} onClick={navBarBtnHander}>
        Menu
      </button>
    </div>
  );
};

export default Navbar;
