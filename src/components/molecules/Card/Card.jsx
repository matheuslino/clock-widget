import Digit from '../../atoms/Digit/Digit'
import styles from './style.module.css'

const Card = ({ fontSize, className, text, period }) => {
  const render = (
    <div className={styles.wrapper} style={{ width: fontSize }}>
      <div className={`${styles.Card} ${className}`}>
        {period ? (
          <>
            <div className={styles.period}>{text < 12 ? 'AM' : 'PM'}</div>
            <Digit fontSize={fontSize}>{text?.slice(-2)}</Digit>
          </>
        ) : (
          <Digit fontSize={fontSize}>{('0' + text)?.slice(-2)}</Digit>
        )}
      </div>
    </div>
  )

  return render
}

export default Card
