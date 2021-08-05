import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// database methods
const database = firebase.database()

const getPath = (path = undefined) => {
  database
    .ref(path)
    .get()
    .then(snapshot => (snapshot.exists() ? snapshot.val() : null))
    .catch(error => {
      console.error(error)
    })
}

// init check
if (!!!getPath()) {
  console.log('Firebase Database is empty, initialize...')
}

export default () => ({ getPath })
