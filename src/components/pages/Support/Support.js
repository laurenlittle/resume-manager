import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from './Support.module';
import Layout from '../../common/Layout/Layout';

const Support = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.heading}>Need <span className={styles.highlight}>Support</span> or have a question?</h1>
        <p>
          We'd love to hear from you. Tell us how we can help and we'll help find a solution.
        </p>
        <p>
          TODO: Add Contact Form
        </p>
      </div>
    </Layout>
  )
}

export default withRouter(Support);
