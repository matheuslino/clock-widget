import Maximize from '../../atoms/icons/Maximize'
import Minimize from '../../atoms/icons/Minimize'
import styles from './style.module.css'

const Fullscreen = () => {
  const render = (
    <div className={styles.container}>
      <Maximize color='#fefefe' />
      <Minimize color='#fefefe' />
    </div>
  )

  return render
}

export default Fullscreen
