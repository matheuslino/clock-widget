import { useEffect, useState, useRef } from 'react'
import Card from '../../molecules/Card/Card'
import styles from './style.module.css'

const Clock = () => {
  const [timer, setTimer] = useState()

  useEffect(() => {
    const localTimer = setInterval(() => {
      let now = new Date()
      setTimer({
        hours: now.getHours() + '',
        minutes: now.getMinutes() + '',
        seconds: now.getSeconds() + '',
      })
    }, 1000)
    return () => clearInterval(localTimer)
  }, [])

  const render = timer && (
    <>
      <div className={styles.clock}>
        <Card fontSize='30vw' text={timer.hours} period />
        <Card fontSize='30vw' text={timer.minutes} />
        <Card fontSize='10vw' text={timer?.seconds} />
      </div>
    </>
  )

  return render
}

export default Clock
