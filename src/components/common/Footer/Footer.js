import React from 'react';
import styles from './Footer.module';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear();

  return(
    <footer className={styles.footer}>
      &copy; {year} Take CMD
      <Link className={styles.footerLink} to='/'>credits</Link>
    </footer>
 )
}
export default Footer;