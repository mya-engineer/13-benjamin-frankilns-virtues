import { EmojiFrownFill } from 'react-bootstrap-icons'

export const ClickableCell = ({
  dayOfWeek,
  handleHistory,
  violated,
  virtueId,
}) => {
  const cellClickHandler = () => handleHistory(dayOfWeek, virtueId)

  return (
    <td onClick={cellClickHandler} style={{ textAlign: 'center' }}>
      {violated ? <EmojiFrownFill size={20} className='ml-auto' /> : <span />}
    </td>
  )
}
