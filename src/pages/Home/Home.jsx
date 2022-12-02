import Fullscreen from '../../components/molecules/Fullscreen/Fullscreen'
import Clock from '../../components/organisms/Clock/Clock'
import styles from './styles.module.css'

const Home = () => {
  const render = (
    <section className={styles.view}>
      <header>
        <Fullscreen />
      </header>
      <main className={styles.main}>
        <Clock />
      </main>
    </section>
  )

  return render
}

export default Home
