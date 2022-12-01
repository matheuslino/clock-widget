import { useEffect, useRef } from 'react'
import Card from '../../molecules/Card/Card'
import styles from './style.module.css'

const Clock = () => {
  const timer = useRef(null)

  //   useEffect(() => {
  //     const time = setTimeout(() => new Date(), 1000)
  //     return () => clearTimeout(time)
  //   }, [])

  const render = (
    <div className={styles.clock}>
      <Card text='11' time={new Date()} period='AM' />
      <Card text='5' />
      <Card text='27' />
    </div>
  )

  return render
}

export default Clock
