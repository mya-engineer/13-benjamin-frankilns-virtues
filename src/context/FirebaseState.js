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
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  const state = {
    week,
    lang,
    virtues,
    loading,
    history,
  }

  // easy weeks counting
  Date.prototype.getRealDay = function getRealDay() {
    const dayOfWeek = this.getDay()
    return dayOfWeek === 0 ? 7 : dayOfWeek
  }

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

  const fetchData = () => {
    console.log('gruzhu')
    if (!loading) {
      setLoading(true)
    }

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

          const newHistory = [
            {
              week: 1,
              virtues: Virtues[lang].map(virtue => ({
                virtue: virtue.id,
                mon: false,
                tue: false,
                wed: false,
                thu: false,
                fri: false,
                sat: false,
                sun: false,
              })),
            },
          ]
          setHistory(newHistory)
          writeData('history', newHistory)

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

            const currentWeek = Math.ceil(
              (startDate.getRealDay() + timedeltaDays) / 7
            )
            setWeek(currentWeek)

            // add week to history
            const isExist = response.history.find(
              item => item.week === currentWeek
            )
            if (!isExist) {
              const newHistory = [
                ...response.history,
                {
                  week: currentWeek,
                  virtues: Virtues[lang].map(virtue => ({
                    virtue: virtue.id,
                    mon: false,
                    tue: false,
                    wed: false,
                    thu: false,
                    fri: false,
                    sat: false,
                    sun: false,
                  })),
                },
              ]
              setHistory(newHistory)
              writeData('history', newHistory)
            } else {
              setHistory(response.history)
            }
          }
        }
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const writeData = async (path = undefined, data) =>
    await database.ref(path).set(data)

  const handleHistory = async (dayOfWeek, virtueId) => {
    const currentHistoryWeek = history.find(item => item.week === week)
    const currentHistoryVirtues = currentHistoryWeek.virtues.find(
      virtue => virtue.virtue === virtueId
    )

    const newCurrentHistoryVirtues = {
      ...currentHistoryVirtues,
      [dayOfWeek]: !currentHistoryVirtues[dayOfWeek],
    }

    currentHistoryWeek.virtues = currentHistoryWeek.virtues.map(item =>
      item.virtue === newCurrentHistoryVirtues.virtue
        ? newCurrentHistoryVirtues
        : item
    )

    const newHistory = history.map(item =>
      item.week === week ? currentHistoryWeek : item
    )

    setHistory(newHistory)
    await writeData('history', newHistory)
  }

  return (
    <FirebaseContext.Provider
      value={{ fetchData, state, setLang, handleHistory }}>
      {children}
    </FirebaseContext.Provider>
  )
}
