import { useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'

export const About = () => {
  const { state } = useContext(FirebaseContext)
  if (state.lang === 'EN') {
    return (
      <div className='my-3'>
        <h2 className='text-decoration-underline'>
          Welcome to the{' '}
          <span className='fst-italic'>
            13 Benjamin Franklin's Virtues application!
          </span>
        </h2>
        <figure>
          <blockquote className='blockquote'>
            <p>
              Around 1728 (at the age of 22 ...) I conceived a bold and
              difficult plan for achieving moral perfection, singling out
              thirteen of the most important moral virtues known to me.
            </p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            Benjamin Franklin
          </figcaption>
        </figure>
        <p>
          This application should improve self-discipline and develop
          personality.
        </p>
        <h3 className='text-decoration-underline'>
          What is the main <span className='fw-bold'>idea</span>?
        </h3>
        <p>
          For continuous improvement, Benjamin Franklin invented weekly cards
          that contained a list of all 13 virtues, the days of the week, and the
          text of the most important virtue for the week. During the day, he
          consulted the card, reminding himself of the goals, and at the end of
          the day he put marks in front of the virtues that he was developing
          today.
        </p>
        <p>
          So this application is arranged in similiar way. After the start of
          first week you have to develop one virtue. On the second week next
          virtue becomes available, so you have to develop this new virtue and
          the virtue of the previous week and so on until thirteen week.
        </p>
        <p>
          Your main goal is{' '}
          <span className='fw-bold'>
            to keep the table (with 13 virtues opened) completed for at least
            two weeks.
          </span>
        </p>
        <p>Don't forget to mark a day of week to confirm self-development!</p>
        <p className='fst-italic'>Best wishes! Become better! =)</p>
      </div>
    )
  } else {
    return (
      <div className='my-3'>
        <h2 className='text-decoration-underline'>
          Добро пожаловать в приложение{' '}
          <span className='fst-italic'>
            13 добродетелей Бенджамина Франклина!
          </span>
        </h2>
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
        <p>Это приложение поможет Вам стать лучше и развить самодисциплину.</p>
        <h3 className='text-decoration-underline'>
          Какова главная <span className='fw-bold'>идея</span>?
        </h3>
        <p>
          Для непрерывного совершенствования Бенджамин Франклин изобрел карточки
          на каждую неделю, которые содержали список всех 13 добродетелей, дни
          недели и текст самой важной добродетели на неделю. В течение дня он
          сверялся с карточкой, напоминая себе о целях, а в конце дня ставил
          отметки напротив тех добродетелей, развитием которых сегодня
          занимался.
        </p>
        <p>
          Это приложение построено подобным образом. После начала первой недели
          Вам требуется развивать одну добродетель. После начала второй недели
          Вам становится доступна следующая добродетель, таким образом Вам надо
          развивать эту новую добродетель, а также добродетель предыдущей недели
          и так далее до 13 недели.
        </p>
        <p>
          Ваша главная задача{' '}
          <span className='fw-bold'>
            продержать таблицу (с открытыми 13ю добродетелями) заполненной на
            протяжении хотя бы двух недель.
          </span>
        </p>
        <p>Не забывайте отмечать дни недели для подтверждения саморазвития!</p>
        <p>Всего самого наилучшего! Станьте лучше! =)</p>
      </div>
    )
  }
}
