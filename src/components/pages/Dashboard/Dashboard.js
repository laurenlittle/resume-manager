import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { firestore } from '../../../firebase';
import styles from './Dashboard.module';
import InternalNav from '../../common/InternalNav/InternalNav';
import Footer from '../../common/Footer/Footer';
import AddForm from '../../forms/AddForm';
import EditForm from '../../forms/EditForm';

const Dashboard = () => {

  // const [documentsList, setDocumentsList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentDoc, setCurrentDoc] = useState();
  const [documentRef, setDocumentRef] = useState();

  const loadDocuments = async () => {
    // Subscribe to DB changes
    firestore.collection('documents').onSnapshot(snapshot => {
      const documents = snapshot.docs.map(addIdToDoc);
      setDocumentsList(documents);
    })
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const addDocument = document => {
    firestore.collection('documents').add(document);
  };

  const updateDocument = (currentDoc, documentRef) => {
    setEditing(false);

    return documentRef.update({
        title: currentDoc.title,
        description: currentDoc.description
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch(error => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

  const editDocument = (document, dbDocRef) => {
    setEditing(true);
    setCurrentDoc(document);
    setDocumentRef(dbDocRef);
  }

  return(
    <div className={styles.layout}>

      <InternalNav />

      <div className={styles.sectionContainer}>
        <section className={styles.sectionLeft}>
            {/* TODO  map => Card components */}
                  {/* {documentsList.map(document => <Card {...document} editDocument={editDocument} key={document.id} />)} */}

        </section>

        <section className={styles.sectionRight}>

          {editing ? (
          <div>
            <EditForm
              setEditing={setEditing}
              documentRef={documentRef}
              currentDoc={currentDoc}
              updateDocument={updateDocument}
            />
          </div>
        ) : (
          <div>
            <AddForm addDocument={addDocument} />
          </div>
        )}

        </section>
      </div>

      <Footer />
    </div>
 )
}
export default withRouter(Dashboard);