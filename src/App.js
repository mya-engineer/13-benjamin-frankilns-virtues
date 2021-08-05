import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Table from './components/PrinciplesTable'
import useFirebase from './hooks/useFirebase'
import { useEffect, useState } from 'react'

function App() {
  const { getPath } = useFirebase()

  const [week, setWeek] = useState(0)

  useEffect(() => {}, [])

  return (
    <div>
      <Navbar week={week} />
      <Container fluid>
        <Table />
      </Container>
    </div>
  )
}

export default App
