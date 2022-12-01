import Digit from '../../atoms/Digit/Digit'
import styles from './style.module.css'

const Card = ({ text, time, period }) => {
  const render = (
    <div className={styles.Card}>
      <div className={styles.flag}>{period}</div>
      <Digit>{text?.slice(0, 1)}</Digit>
      <Digit>{text?.slice(1, 2)}</Digit>
    </div>
  )

  return render
}

export default Card
