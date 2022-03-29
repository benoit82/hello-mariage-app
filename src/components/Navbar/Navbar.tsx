import { FC, useState } from 'react';
import NavbarButton from '@components/NavbarButton/NavbarButton';
import classNames from 'classnames';
import Image from 'next/Image';
import Link from 'next/Link';

import style from './Navbar.module.scss';
import { useRouter } from 'next/router';

interface NavBarLink {
  label: string;
  href: string;
}

const Navbar: FC = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);
  const handleNavBarBtn = () => setDisplayMenu(!displayMenu);
  const router = useRouter();
  const menu: NavBarLink[] = [
    { label: 'Thèmes', href: '/#themes' },
    { label: 'Faire une demande', href: '/#userRequest' },
    { label: 'Notre entreprise', href: '/#whoAreWe' },
    { label: 'Contact', href: '/#contact' },
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
              <a
                className={classNames({
                  [style.activeLink]: router.pathname === href,
                })}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <NavbarButton handleClick={handleNavBarBtn} />
    </div>
  );
};

export default Navbar;
