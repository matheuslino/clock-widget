import Digit from '../../atoms/Digit/Digit'
import styles from './style.module.css'

const Card = ({ text, period }) => {
  const render = (
    <div className={styles.Card}>
      {period ? (
        <>
          <div className={styles.period}>{text < 12 ? 'AM' : 'PM'}</div>
          <Digit>{text?.slice(-2)}</Digit>
        </>
      ) : (
        <Digit>{('0' + text)?.slice(-2)}</Digit>
      )}
    </div>
  )

  return render
}

export default Card
