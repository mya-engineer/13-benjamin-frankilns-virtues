import { Table } from 'react-bootstrap'

const PrinciplesTable = ({ virtues }) => (
  <Table bordered hover size={'xlg'}>
    <thead>
      <tr>
        <th>Virtue</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>
      </tr>
    </thead>
    <tbody>
      {virtues.map(item => (
        <tr key={item.id}>
          <td>
            {item.id}. {item.virtueName}
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default PrinciplesTable
