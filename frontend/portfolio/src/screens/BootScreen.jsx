import { useEffect } from 'react'
import './BootScreen.css'

export default function BootScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3800)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div
      className="boot-screen"
      onClick={onDone}
      style={{ cursor: 'pointer' }}
      title="Click anywhere to skip directly to desktop"
    >
      <div className="boot-center">

        {/* Windows logo with transparent background - larger */}
        <img
          src="/assets/icons/windows-logo-transparent.png"
          alt="Windows Logo"
          className="boot-flag"
        />

        {/* Title */}
        <div className="boot-title">
          <div className="boot-name-row">
            <span className="boot-name">Yash</span>
            <span className="boot-xp">xp</span>
          </div>
          <span className="boot-sub">MERN Stack Developer</span>
        </div>

        {/* XP-style progress bar */}
        <div className="boot-progress-wrap">
          <div className="boot-progress-track">
            <div className="boot-dots-runner">
              <span className="bdot"></span>
              <span className="bdot"></span>
              <span className="bdot"></span>
            </div>
          </div>
        </div>

      </div>

      <div className="boot-bottom-left">
        <p>For the best experience</p>
        <p>Enter Full Screen (F11)</p>
      </div>

      <div className="boot-bottom-right">
        Portfolio<sup>®</sup>
      </div>
    </div>
  )
}
