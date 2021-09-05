import { Table, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { QuestionCircleFill } from 'react-bootstrap-icons'
import { ClickableCell } from './ClickableCell'

const PrinciplesTable = ({ virtues, lang, history, week, handleHistory }) => {
  const daysOrder = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

  const buildTds = itemId => {
    const weekVirtue = history
      .find(obj => obj.week === week)
      .virtues.find(obj => obj.virtue === itemId)
    return daysOrder.map(day => (
      <ClickableCell
        key={`${day}-${itemId}`}
        virtueId={itemId}
        violated={weekVirtue[day]}
        dayOfWeek={day}
        handleHistory={handleHistory}
      />
    ))
  }

  return (
    <Table
      bordered
      hover
      className='shadow my-3'
      style={{ tableLayout: 'fixed' }}>
      <thead className='user-select-none'>
        <tr>
          {lang === 'EN' ? (
            <>
              <th>Virtue</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </>
          ) : (
            <>
              <th>Добродетель</th>
              <th>Пон</th>
              <th>Вт</th>
              <th>Ср</th>
              <th>Чт</th>
              <th>Пт</th>
              <th>Сб</th>
              <th>Вс</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {virtues.map((item, index) => {
          if (index + 1 <= week || week >= virtues.length) {
            return (
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
                {buildTds(item.id)}
              </tr>
            )
          }
          return <tr key={item.id}></tr>
        })}
      </tbody>
    </Table>
  )
}

export default PrinciplesTable
