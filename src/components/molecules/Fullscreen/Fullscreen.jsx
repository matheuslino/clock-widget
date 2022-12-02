import { useState, useEffect } from 'react'
import Maximize from '../../atoms/icons/Maximize'
import Minimize from '../../atoms/icons/Minimize'
import styles from './style.module.css'

const Fullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleIcon = () => setIsFullscreen((prev) => !prev)

  useEffect(() => {
    if (isFullscreen) document.body.requestFullscreen()
    else if (document.fullscreenElement) document.exitFullscreen()
  }, [isFullscreen])

  const render = (
    <div className={styles.container} onClick={toggleIcon}>
      {isFullscreen ? (
        <Minimize color='#fefefe' />
      ) : (
        <Maximize color='#fefefe' />
      )}
    </div>
  )

  return render
}

export default Fullscreen
