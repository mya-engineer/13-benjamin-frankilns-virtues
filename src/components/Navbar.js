import { Container, Navbar } from 'react-bootstrap'

export default ({ week }) => (
  <Navbar bg='dark' variant='dark'>
    <Container fluid>
      <Navbar.Brand>13-Benjamin-Franklin's-Virtues</Navbar.Brand>
      <Navbar.Text>{week} week</Navbar.Text>
    </Container>
  </Navbar>
)
