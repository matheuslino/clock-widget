import Card from '../../molecules/Card/Card'
import styles from './style.module.css'

const Clock = () => {
  const render = (
    <div className={styles.clock}>
      <Card text='12' flagged />
      <Card text='5' />
      <Card text='27' />
    </div>
  )

  return render
}

export default Clock
