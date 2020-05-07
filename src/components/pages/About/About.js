import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from './About.module';
import Layout from '../../common/Layout/Layout';
import Button from '../../common/Button/Button';

const About = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.heading}><span className={styles.highlight}>About </span>Take CMD.</h1>
        <p>
          Take CMD was inspired by the article <a className={styles.link} href='https://alistapart.com/article/the-career-management-document/'> The Career Management Document</a>. 
          The goal was to have a single, comprehensive, and organized record of your career accomplishments and milestones.
          Take CMD is simple and easy to use, so updating a resume or portfolio is a breeze.
          <br/>
          Take control of your career by creating your own career management document today!
        </p>
        <Button text="Get Started" />
      </div>
    </Layout>
  )
}

export default withRouter(About);
