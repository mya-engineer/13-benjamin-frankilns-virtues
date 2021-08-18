import { Main } from './pages/Main'
import { About } from './pages/About'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { FirebaseContext } from './context/FirebaseContext'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'

function App() {
  const { state, setLang } = useContext(FirebaseContext)

  const changeLangHandler = () => setLang(state.lang === 'EN' ? 'RU' : 'EN')

  return (
    <Router>
      <Navbar
        week={state.week}
        lang={state.lang}
        changeLangHandler={changeLangHandler}
        loading={state.loading}
      />
      <Container fluid>
        <Switch>
          <Route path={'/'} exact component={Main} />
          <Route path={'/about'} component={About} />
          <Redirect to={'/'} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
