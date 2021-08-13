import { Main } from './pages/Main'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { FirebaseContext } from './context/FirebaseContext'

function App() {
  const { state, setLang } = useContext(FirebaseContext)

  const changeLangHandler = () => setLang(state.lang === 'EN' ? 'RU' : 'EN')

  return (
    <>
      <Navbar
        week={state.week}
        lang={state.lang}
        changeLangHandler={changeLangHandler}
        loading={state.loading}
      />
      <Container fluid>
        <Main />
      </Container>
    </>
  )
}

export default App
