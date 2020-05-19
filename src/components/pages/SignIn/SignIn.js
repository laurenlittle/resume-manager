import React, { useState } from 'react';
import { signInWithGoogle } from '../../../firebase';
import Layout from '../../common/Layout/Layout';
import googleBtn from '../../../assets/btn_google_signin_dark_normal_web.png';
import styles from './SignIn.module';

const SignIn = () => {

  const initialSignInState = {
    email: '',
    password: ''
  };

  const [userInfo, setUserInfo] = useState(initialSignInState);

  const handleChange = e => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    setUserInfo({
      ...userInfo,
      email: '',
      password: ''
    })
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Sign In</h2>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}> Sign In
          <i class="fas fa-angle-double-right"></i>
        </button>
      </form>

      <img onClick={signInWithGoogle} src={googleBtn} alt='Google Sign In Button' />
     </Layout>
  );
}

export default SignIn;