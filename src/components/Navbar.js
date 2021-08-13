import { Container, Navbar, Badge, Spinner } from 'react-bootstrap'

const NavBar = ({ week, lang, changeLangHandler, loading }) => (
  <Navbar bg='dark' variant='dark'>
    <Container fluid>
      <Navbar.Brand>
        13-Benjamin-Franklin's-Virtues&nbsp;
        <Badge
          pill
          bg='light'
          text='dark'
          className='user-select-none'
          style={{
            cursor: 'pointer',
          }}
          onClick={() => changeLangHandler()}>
          {lang}
        </Badge>
      </Navbar.Brand>
      <Navbar.Text>
        {new Date()
          .toLocaleDateString(lang, {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            localeMatcher: 'lookup',
          })
          .capitalize()}
      </Navbar.Text>
      {!loading ? (
        <Navbar.Text>
          {lang === 'EN' ? `${week} week` : `${week} неделя`}
        </Navbar.Text>
      ) : (
        <Navbar.Text>
          <Spinner animation='grow' size='sm' />
        </Navbar.Text>
      )}
    </Container>
  </Navbar>
)

export default NavBar
