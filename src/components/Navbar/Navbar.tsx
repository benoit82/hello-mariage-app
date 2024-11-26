import { FC, useState } from 'react';
import NavbarButton from '@/components/NavbarButton/NavbarButton';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { menuNavBar } from '@/utils/constants';

import style from './Navbar.module.scss';

const Navbar: FC = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(true);
  const handleNavBarBtn = () => setDisplayMenu(!displayMenu);
  const router = useRouter();

  return (
    <div className={style.navbarContainer}>
      <ul className={style.linkList}>
        <li>
            <img
              src="/img/logo-hellomariage.png"
              alt="logo Hello Mariage"
              height="70px"
              width="70px"
            />
        </li>
        {menuNavBar.map(({ label, href }, index) => (
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
