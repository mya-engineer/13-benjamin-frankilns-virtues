import { Container, Navbar, Spinner } from 'react-bootstrap'

const NavBar = ({ week }) => (
  <Navbar bg='dark' variant='dark'>
    <Container fluid>
      <Navbar.Brand>13-Benjamin-Franklin's-Virtues</Navbar.Brand>
      {week ? (
        <Navbar.Text>{week} week</Navbar.Text>
      ) : (
        <Navbar.Text>
          <Spinner animation='grow' size='sm' />
        </Navbar.Text>
      )}
    </Container>
  </Navbar>
)

export default NavBar
