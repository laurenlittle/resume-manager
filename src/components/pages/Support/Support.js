import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from './Support.module';
import Layout from '../../common/Layout/Layout';

const Support = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.heading}>Need <span className={styles.highlight}>Support</span> ?</h1>
        <p>
          Got Feedback? Have a question?
          <br/>
          We'd love to hear from you.
          <br/>
          Tell us how we can help and we'll help find a solution.
        </p>
        <a className={styles.link} href='mailto:littlelauren016@gmail.com'>
          Contact Us Now
        </a>
        {/* TODO: Update to Form */}
      </div>
    </Layout>
  )
}

export default withRouter(Support);
