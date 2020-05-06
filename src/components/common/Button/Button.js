import React from 'react';
import styles from './Button.module';

const Button = ({text}) => {

  return(
    <button className={styles.button}>
      {text}
      <i class="fas fa-angle-double-right"></i>
    </button>
 )
}

export default Button;