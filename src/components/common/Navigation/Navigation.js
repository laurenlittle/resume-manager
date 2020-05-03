import React from 'react';
import styles from './Navigation.module';
import { Link } from 'react-router-dom';
import logo from '../../../assets/take-cmd-logo.png'

const Navigation = () => {

  return(
    <nav className={styles.nav}>

      <div className={styles.logoContainer}>
        <Link className={styles.headerLogo} to='/'>
          <img src={logo} alt='take cmd logo' />
        </Link>
      </div>

      <ul className={styles.menuItems}>
        <li>
          <Link className={styles.singleMenuItem} to='/about'>About</Link>
        </li>
        <li>
          <Link className={styles.singleMenuItem} to='/support'>Support</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navigation;