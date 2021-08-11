import { useState } from 'react'
import { FirebaseContext } from './FirebaseContext'
import firebase from 'firebase/app'
import 'firebase/database'
import Virtues from '../virtues.json'

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

export const FirebaseState = ({ children }) => {
  const [week, setWeek] = useState(0)
  const [lang, setLang] = useState('EN')
  const [virtues, setVirtues] = useState(undefined)

  const state = {
    week,
    lang,
    virtues,
  }

  // easy weeks counting
  Date.prototype.getRealDay = function getRealDay() {
    const dayOfWeek = this.getDay()
    return dayOfWeek === 0 ? 7 : dayOfWeek
  }

  const fetchData = () =>
    database
      .ref()
      .get()
      .then(snapshot => {
        const response = snapshot.val()
        // init check
        if (!!!response) {
          console.log('Firebase Database is empty, initialize...')
          writeData('date', +new Date())
          writeData('virtues', Virtues)

          setVirtues(Virtues[lang])

          setWeek(1)
        } else {
          setVirtues(response.virtues[lang])

          if (!week) {
            const startDate = new Date(response.date)
            const todayDate = +new Date()

            const timedeltaDays = Math.floor(
              (todayDate - startDate) / (1000 * 3600 * 24)
            )

            setWeek(Math.ceil((startDate.getRealDay() + timedeltaDays) / 7))
          }
        }
      })
      .catch(error => {
        console.error(error)
      })

  const writeData = async (path = undefined, data) =>
    await database.ref(path).set(data)

  return (
    <FirebaseContext.Provider value={{ fetchData, state }}>
      {children}
    </FirebaseContext.Provider>
  )
}
