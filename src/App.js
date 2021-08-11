import { Main } from './pages/Main'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { FirebaseContext } from './context/FirebaseContext'

function App() {
  const { state } = useContext(FirebaseContext)

  return (
    <>
      <Navbar week={state.week} />
      <Container fluid>
        <Main />
      </Container>
    </>
  )
}

export default App
