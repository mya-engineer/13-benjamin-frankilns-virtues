import Table from '../components/PrinciplesTable'
import { useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import { Loader } from '../components/Loader'

export const Main = () => {
  const { state, handleHistory } = useContext(FirebaseContext)

  return !state.loading ? (
    <Table
      virtues={state.virtues}
      lang={state.lang}
      history={state.history}
      week={state.week}
      handleHistory={handleHistory}
    />
  ) : (
    <Loader />
  )
}
