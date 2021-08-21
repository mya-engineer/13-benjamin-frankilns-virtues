import { Main } from './pages/Main'
import { About } from './pages/About'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import { useContext, useEffect } from 'react'
import { FirebaseContext } from './context/FirebaseContext'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'

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
        }}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
          <NavItem eventKey='home'>
            <NavIcon>
              <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey='charts'>
            <NavIcon>
              <i
                className='fa fa-fw fa-line-chart'
                style={{ fontSize: '1.75em' }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey='charts/linechart'>
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey='charts/barchart'>
              <NavText>Bar Chart</NavText>
            </NavItem>
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
