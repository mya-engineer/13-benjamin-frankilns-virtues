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
  const { state, changeLang, fetchData } = useContext(FirebaseContext)

  const changeLangHandler = () => changeLang()

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(state)

  return (
    <Router>
      <Route
        render={routeProps => (
          <>
            <SideNav
              onToggle={() =>
                document.querySelector('#main-page').classList.toggle('active')
              }
              onSelect={selected => {
                const to = selected === 'home' ? '/' : '/' + selected
                if (routeProps.location.pathname !== to) {
                  routeProps.history.push(to)
                }
              }}
              id='sidenav'>
              <SideNav.Toggle />
              <SideNav.Nav
                defaultSelected={
                  !routeProps.history.location.pathname.replace('/', '')
                    ? 'home'
                    : routeProps.history.location.pathname.replace('/', '')
                }>
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
                  <Route path={'/about'} component={About} />
                  <Route path={'/'} exact component={Main} />
                  <Redirect to={'/'} />
                </Switch>
              </Container>
            </div>
          </>
        )}
      />
    </Router>
  )
}

export default App
