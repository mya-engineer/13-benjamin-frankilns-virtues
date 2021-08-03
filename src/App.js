import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Table from './components/PrinciplesTable'
import useFirebase from './hooks/useFirebase'
import { useEffect, useState } from 'react'

function App() {
  const firebase = useFirebase()
  const database = firebase.database()

  const [week, setWeek] = useState(0)

  useEffect(() => {
    database
      .ref()
      .child('week')
      .get()
      .then(snapshot =>
        snapshot.exists()
          ? setWeek(snapshot.val())
          : console.log('No data available')
      )
      .catch(error => {
        console.error(error)
      })
  }, [])

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
