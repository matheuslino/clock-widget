import { useState, useEffect } from 'react'
import Maximize from '../../atoms/icons/Maximize'
import Minimize from '../../atoms/icons/Minimize'
import styles from './style.module.css'

const Fullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleIcon = () => setIsFullscreen((prev) => !prev)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', toggleIcon)
    return () => document.removeEventListener('fullscreenchange', toggleIcon)
  }, [])

  const render = (
    <div className={styles.container} onClick={toggleFullScreen}>
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
