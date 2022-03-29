import { NextPage } from 'next';
import styles from './InfoPage.module.scss';

const InfoPage: NextPage = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default InfoPage;
