import React, { useState } from 'react';
import styles from './AddForm.module';
import { auth } from '../../firebase';

const AddForm = ({ addDocument }) => {

const initialFormState = {
  title: '',
  description: ''
};

const [document, setDocument] = useState(initialFormState);

const { title, description } = document;
const { uid, displayName, photoURL, email } = auth.currentUser || {};

const documentInfo = {
  title,
  description,
  user: {
    uid,
    displayName,
    email,
    photoURL
  },
  createdAt: new Date(),
};

  const handleChange = name => e => {
    setDocument({
      ...document,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    addDocument(documentInfo);
    setDocument({
      ...document,
      title: '',
      description: ''
    })
  }

  const addDocumentForm = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.formItem}>
         <input
          id='title-input'
          className={styles.formTitle}
          type='text'
          name='title'
          value={document.title}
          onChange={handleChange('title')}
          required
          title='Title'
          placeholder='Title'
          />
      </div>
      <div className={styles.formItem}>
         <textarea
          id='desc-text'
          className={styles.formDescription}
          name='description'
          value={document.description}
          onChange={handleChange('description')}
          required
          title='Description'
          placeholder='Description'
          ></textarea>
      </div>
      <button className={styles.button}>+ Add to CMD</button>
    </form>
  )

  return (
    <>
    <h2 className={styles.heading}>Add a New Accomplishment!</h2>
    {addDocumentForm()}
    </>
  )

}

export default AddForm;