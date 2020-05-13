import React from 'react';
import styles from './Dashboard.module';
import InternalNav from '../../common/InternalNav/InternalNav';
import Footer from '../../common/Footer/Footer';
import { withRouter } from 'react-router-dom';
import AddForm from '../../forms/AddForm';

const Dashboard = () => {

  return(
    <div className={styles.layout}>

      <InternalNav />

      <div className={styles.sectionContainer}>
        <section className={styles.sectionLeft}>
            {/* TODO  map => Card components */}
        </section>

        <section className={styles.sectionRight}>
          <AddForm />
        </section>
      </div>

      <Footer />
    </div>
 )
}
export default withRouter(Dashboard);