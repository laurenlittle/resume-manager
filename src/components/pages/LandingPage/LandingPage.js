import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './LandingPage.module'
import Layout from '../../common/Layout/Layout'

const LandingPage = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.heading}>Take <span className={styles.highlight}>control</span> of your career.</h1>
        <p>Keep a collection of your daily/weekly accomplishments,
          work completed, and career milestones all in one place.
          Updating resumes and portfolios becomes painless.
        </p>
        {/* TODO Add Button Component */}
      </div>
    </Layout>
  )
}

export default withRouter(LandingPage);