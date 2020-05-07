import React from 'react';
import styles from './InternalLayout.module';
import InternalNav from '../InternalNav/InternalNav';
// import Button from '../Button/Button';

const InternalLayout = () => {

  return(
    <div className={styles.layout}>

      <InternalNav />

      <div className={styles.sectionContainer}>
        <section className={styles.sectionLeft}>
            {/* TODO  map => Card components */}
        </section>

        <section className={styles.sectionRight}>
          {/* TODO  Form component */}
        </section>
      </div>

      <Footer />
    </div>
 )
}
export default InternalLayout;