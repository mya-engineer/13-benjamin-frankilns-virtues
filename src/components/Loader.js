import { Spinner } from 'react-bootstrap'

export const Loader = () => (
  <Spinner
    animation='border'
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
    }}
  />
)
