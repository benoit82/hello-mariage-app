import { FC } from 'react';

import style from './NavbarButton.module.scss';

type NavbarButtonProps = {
  handleClick: () => void;
};

const NavbarButton: FC<NavbarButtonProps> = ({ handleClick }) => {
  return (
    <button className={style.navbarButton} onClick={handleClick}>
      ↕
    </button>
  );
};

export default NavbarButton;
