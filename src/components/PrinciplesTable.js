import { Table, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { QuestionCircleFill } from 'react-bootstrap-icons'

const PrinciplesTable = ({ virtues }) => (
  <Table
    bordered
    hover
    className='shadow my-3'
    style={{ tableLayout: 'fixed' }}>
    <thead className='user-select-none'>
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
          <td className='d-flex align-items-center justify-content-between'>
            <span>
              {item.id}. {item.virtueName}
            </span>
            <OverlayTrigger
              placement={'auto'}
              overlay={<Tooltip>{item.virtueDesc}</Tooltip>}
              key={`tooltip-${item.id}`}>
              <QuestionCircleFill style={{ cursor: 'help' }} />
            </OverlayTrigger>
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
