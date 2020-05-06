import React from 'react';
import styles from './Layout.module';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import documents from '../../../assets/documents.png';
import Button from '../Button/Button';

const Layout = ({ children }) => {

  return(
    <div className={styles.layout}>

      <Navigation />

      <div className={styles.sectionContainer}>
        <section className={styles.sectionLeft}>
            {children}
        </section>

        <section className={styles.sectionRight}>
          <img src={documents} className={styles.mainImg} alt='girl organizing papers in filing cabinet' />
        </section>
      </div>

      <Footer />
    </div>
 )
}
export default Layout;