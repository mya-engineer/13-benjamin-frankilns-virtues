import { Main } from './pages/Main'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import { FirebaseState } from './context/FirebaseState'

function App() {
  return (
    <FirebaseState>
      <div>
        <Navbar week={0} />
        <Container fluid>
          <Main />
        </Container>
      </div>
    </FirebaseState>
  )
}

export default App
