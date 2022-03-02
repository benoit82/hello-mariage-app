import { FC, useState } from 'react';

import classNames from 'classnames';

import style from './Navbar.module.scss';
import NavbarButton from '@components/NavbarButton/NavbarButton';

const Navbar: FC = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);
  const handleNavBarBtn = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className={style.navbarContainer}>
      <ul
        className={classNames(style.linkList, {
          [style.linkDisplay]: displayMenu,
        })}
      >
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
      <NavbarButton handleClick={handleNavBarBtn} />
    </div>
  );
};

export default Navbar;
