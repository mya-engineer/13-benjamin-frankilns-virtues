import { useState } from 'react'
import { EmojiFrownFill } from 'react-bootstrap-icons'

export const ClickableCell = () => {
  const [cell, setCell] = useState(false)

  const cellClickHandler = () => setCell(!cell)

  return (
    <td onClick={cellClickHandler} style={{ textAlign: 'center' }}>
      {cell ? <EmojiFrownFill size={20} className='ml-auto' /> : <span />}
    </td>
  )
}
