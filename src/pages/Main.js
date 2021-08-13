import Table from '../components/PrinciplesTable'
import { useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import { Loader } from '../components/Loader'

export const Main = () => {
  const { state, fetchData } = useContext(FirebaseContext)

  useEffect(() => {
    fetchData()
  }, [state.lang])

  return !state.loading ? (
    <Table virtues={state.virtues} lang={state.lang} />
  ) : (
    <Loader />
  )
}
