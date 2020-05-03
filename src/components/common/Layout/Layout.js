import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module';
import Navigation from '../Navigation/Navigation';
// import Footer from '../Footer/Footer';
import iphone from '../../../assets/iphone.png'

const Layout = ({ children }) => {

  return(
    <div className={styles.layout}>

      <section className={styles.sectionLeft}>
        <Navigation />
          {children}
        {/* <Footer /> */}
      </section>

      <section className={styles.sectionRight}>
        <Link className={styles.button} to='/profile'>Log In</Link>
        <img src={iphone} className={styles.mainImg} alt='iphone displaying mobile app' />
      </section>

    </div>
 )

}
export default Layout;