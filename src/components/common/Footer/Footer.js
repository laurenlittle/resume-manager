import React from 'react';
import styles from './Footer.module';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear();

  return(
    <footer className={styles.footer}>
      <p>&copy; {year} Take CMD</p>
      <Link className={styles.footerLink} to='/'>credits</Link>
    </footer>
 )
}
export default Footer;