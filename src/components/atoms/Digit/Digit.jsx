import styles from './style.module.css'

const Digit = ({ fontSize, ...props }) => (
  <div className={styles.text} style={{ fontSize: fontSize }}>
    {props.children}
  </div>
)

export default Digit
