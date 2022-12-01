import Clock from '../../components/organisms/Clock/Clock'
import styles from './styles.module.css'

const Home = () => {
  const render = (
    <div className={styles.main}>
      <Clock />
    </div>
  )

  return render
}

export default Home
