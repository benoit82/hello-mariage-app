import { FC, useState } from 'react';
import NavbarButton from '@components/NavbarButton/NavbarButton';
import classNames from 'classnames';
import Image from 'next/Image';
import Link from 'next/Link';

import style from './Navbar.module.scss';

interface NavBarLink {
  label: string;
  href: string;
}

const Navbar: FC = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);
  const handleNavBarBtn = () => setDisplayMenu(!displayMenu);
  const menu: NavBarLink[] = [
    { label: 'Thèmes', href: '#' },
    { label: 'Faire une demande', href: '#' },
    { label: 'Notre entreprise', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <div className={style.navbarContainer}>
      <ul className={style.linkList}>
        <li>
          <Link href="/" passHref>
            <a>
              <Image
                src={'/img/logo-hellomariage.png'}
                alt={'logo Hello Mariage'}
                height={'70px'}
                width={'70px'}
              />
            </a>
          </Link>
        </li>
        {menu.map(({ label, href }, index) => (
          <li
            key={index}
            className={classNames({
              [style.linkDisplay]: displayMenu,
            })}
          >
            <Link href={href} passHref>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <NavbarButton handleClick={handleNavBarBtn} />
    </div>
  );
};

export default Navbar;
