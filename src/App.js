import { Main } from './pages/Main'
import { About } from './pages/About'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import { useContext, useEffect } from 'react'
import { FirebaseContext } from './context/FirebaseContext'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import { HouseDoor, QuestionCircle } from 'react-bootstrap-icons'

function App() {
  const { state, setLang, fetchData } = useContext(FirebaseContext)

  const changeLangHandler = () => setLang(state.lang === 'EN' ? 'RU' : 'EN')

  useEffect(() => {
    fetchData()
  }, [state.lang])
  console.log('dsds')

  return (
    <Router>
      <SideNav
        onToggle={() =>
          document.querySelector('#main-page').classList.toggle('active')
        }
        onSelect={selected => {
          // Add your code here
        }}
        id='sidenav'>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
          <NavItem eventKey='home'>
            <NavIcon>
              <HouseDoor size={20} />
            </NavIcon>
            {state.lang === 'EN' ? (
              <NavText>Home</NavText>
            ) : (
              <NavText>Домашняя</NavText>
            )}
          </NavItem>
          <NavItem eventKey='about'>
            <NavIcon>
              <QuestionCircle size={20} />
            </NavIcon>
            {state.lang === 'EN' ? (
              <NavText>About</NavText>
            ) : (
              <NavText>О приложении</NavText>
            )}
          </NavItem>
        </SideNav.Nav>
      </SideNav>

      <div id='main-page'>
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
      </div>
    </Router>
  )
}

export default App
