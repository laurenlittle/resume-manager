import React from 'react';
import styles from './InternalNav.module';
import { Link } from 'react-router-dom';
import logo from '../../../assets/take-cmd-logo.png';

const InternalNav = () => {

  return(
    <nav className={styles.nav}>

      <div className={styles.logoContainer}>
        <Link className={styles.headerLogo} to='/'>
          <img src={logo} alt='take cmd logo' />
        </Link>
      </div>

      <ul className={styles.menuItems}>
        <li>
          <Link className={styles.singleMenuItem} to='/calendar'>
            <i className="far fa-calendar-check"></i>
          </Link>
        </li>
        <li>
          <Link className={styles.singleMenuItem} to='/profile'>
            <i className="fas fa-user-circle"></i>
          </Link>
        </li>
        <li>
          <Link className={styles.singleMenuItem} to='/reminders'>
            <i className="fas fa-bell"></i>
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default InternalNav;