import { useReducer } from 'react'
import { FirebaseContext } from './FirebaseContext'
import firebase from 'firebase/app'
import 'firebase/database'
import Virtues from '../virtues.json'
import { firebaseReducer } from './FirebaseReducer'
import {
  SHOW_LOADER,
  FETCH_DATA,
  CHANGE_LANG,
  CLICK_HANDLE,
} from './types/types'

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
  const [state, dispatch] = useReducer(firebaseReducer, {
    week: 0,
    lang: 'EN',
    virtues: undefined,
    history: [],
    loading: true,
  })

  // easy weeks counting
  // eslint-disable-next-line no-extend-native
  Date.prototype.getRealDay = function getRealDay() {
    const dayOfWeek = this.getDay()
    return dayOfWeek === 0 ? 7 : dayOfWeek
  }

  // eslint-disable-next-line no-extend-native
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

  const fetchData = (changeLang = false) => {
    console.log('gruzhu')
    if (!state.loading) {
      dispatch({ type: SHOW_LOADER })
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
              virtues: Virtues[state.lang].map(virtue => ({
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
          writeData('history', newHistory)

          dispatch({
            type: FETCH_DATA,
            payload: {
              week: 1,
              virtues: Virtues[state.lang],
              history: newHistory,
            },
          })
        } else {
          if (changeLang) {
            dispatch({
              type: CHANGE_LANG,
              payload: {
                virtues: response.virtues[state.lang === 'EN' ? 'RU' : 'EN'],
                lang: state.lang === 'EN' ? 'RU' : 'EN',
              },
            })
          } else {
            const startDate = new Date(response.date)
            const todayDate = +new Date()

            const timedeltaDays = Math.floor(
              (todayDate - startDate) / (1000 * 3600 * 24)
            )

            const currentWeek = Math.ceil(
              (startDate.getRealDay() + timedeltaDays) / 7
            )

            // add week to history
            let newHistory = response.history
            const isExist = response.history.find(
              item => item.week === currentWeek
            )
            if (!isExist) {
              newHistory = [
                ...response.history,
                {
                  week: currentWeek,
                  virtues: Virtues[state.lang].map(virtue => ({
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
              writeData('history', newHistory)
            }
            dispatch({
              type: FETCH_DATA,
              payload: {
                week: currentWeek,
                history: newHistory,
                virtues: response.virtues[state.lang],
              },
            })
          }
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  const writeData = async (path = undefined, data) =>
    await database.ref(path).set(data)

  const handleHistory = async (dayOfWeek, virtueId) => {
    const currentHistoryWeek = state.history.find(
      item => item.week === state.week
    )
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

    const newHistory = state.history.map(item =>
      item.week === state.week ? currentHistoryWeek : item
    )

    dispatch({ type: CLICK_HANDLE, payload: { history: newHistory } })
    await writeData('history', newHistory)
  }

  const changeLang = () => fetchData(true)

  return (
    <FirebaseContext.Provider
      value={{ fetchData, changeLang, state, handleHistory }}>
      {children}
    </FirebaseContext.Provider>
  )
}
