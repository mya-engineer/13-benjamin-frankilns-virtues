import Table from '../components/PrinciplesTable'
import { useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'

export const Main = () => {
  const { state, fetchData } = useContext(FirebaseContext)

  useEffect(() => {
    fetchData()
  }, [])
  console.log(state.virtues)

  return <Table />
}
