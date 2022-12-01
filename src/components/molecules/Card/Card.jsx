import Digit from '../../atoms/Digit/Digit'
import styles from './style.module.css'

const Card = ({ text, flagged }) => {
  const render = (
    <div className={styles.Card}>
      <Digit>{text?.slice(0, 1)}</Digit>
      <Digit>{text?.slice(1, 2)}</Digit>
    </div>
  )

  return render
}

export default Card
