import { useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'

export const About = () => {
  const { state } = useContext(FirebaseContext)

  return (
    <div className='my-3'>
      <h2>
        Welcome to the{' '}
        <span className='fst-italic'>
          13 Benjamin Franklin's Virtues application!
        </span>
      </h2>
      {state.lang === 'EN' ? (
        <figure>
          <blockquote className='blockquote'>
            <p>
              Around 1728 (that is, at the age of 22 ...) I conceived a bold and
              difficult plan for achieving moral perfection, singling out
              thirteen of the most important moral virtues known to me.
            </p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            Benjamin Franklin
          </figcaption>
        </figure>
      ) : (
        <figure>
          <blockquote className='blockquote'>
            <p>
              Приблизительно в 1728 году (то есть в возрасте 22 лет...) я
              замыслил смелый и трудный план достижения морального совершенства,
              выделив из известных мне моральных добродетелей тринадцать
              важнейших.
            </p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            Бенджамин Франклин
          </figcaption>
        </figure>
      )}
      <p>
        This application should improve self-discipline and develop personality.
      </p>
    </div>
  )
}
