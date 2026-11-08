import { useState, useEffect } from 'react'
import { playShutdown } from '../utils/sound'
import './ShutdownScreen.css'

export default function ShutdownScreen({ onPowerOn }) {
  const [phase, setPhase] = useState('shutting-down') // 'shutting-down' | 'off'

  useEffect(() => {
    // Play shutdown chime immediately on mount
    playShutdown()

    // After 3s, switch to the black "safe to turn off" screen
    const timer = setTimeout(() => {
      setPhase('off')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (phase === 'off') {
    return (
      <div className="sd-off" onClick={onPowerOn}>
        <p className="sd-safe-text">It is now safe to turn off your computer.</p>
        <p className="sd-power-hint">[ ⚡ Click anywhere to power on ]</p>
      </div>
    )
  }

  return (
    <div className="sd-shutting">
      {/* Top Windows logo area */}
      <div className="sd-top">
        <div className="sd-logo">
          <span className="sd-logo-flag">
            <span style={{ color: '#e74c3c' }}>■</span>
            <span style={{ color: '#27ae60' }}>■</span>
            <br />
            <span style={{ color: '#3498db' }}>■</span>
            <span style={{ color: '#f39c12' }}>■</span>
          </span>
          <span className="sd-logo-text">Windows<span className="sd-logo-xp">XP</span></span>
        </div>
      </div>

      {/* Center content */}
      <div className="sd-center">
        <p className="sd-message">Windows is shutting down...</p>
        <div className="sd-bar-track">
          <div className="sd-bar-fill" />
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="sd-bottom">
        <p className="sd-copy">Copyright © Microsoft Corporation</p>
      </div>
    </div>
  )
}
