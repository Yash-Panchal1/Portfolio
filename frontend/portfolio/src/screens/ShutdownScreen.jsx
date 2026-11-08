import { useState, useEffect } from 'react'
import { playShutdown, playClick } from '../utils/sound'
import './ShutdownScreen.css'

function PowerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="sd-power-svg"
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  )
}

export default function ShutdownScreen({ onPowerOn }) {
  const [phase, setPhase] = useState('shutting-down') // 'shutting-down' | 'off'

  useEffect(() => {
    // Play shutdown chime immediately on mount
    playShutdown()

    // After 3.6s, switch to the authentic powered-down screen
    const timer = setTimeout(() => {
      setPhase('off')
    }, 3600)

    return () => clearTimeout(timer)
  }, [])

  const handlePowerOn = (e) => {
    if (e) e.stopPropagation()
    playClick()
    onPowerOn()
  }

  if (phase === 'off') {
    return (
      <div
        className="sd-screen sd-screen-off"
        onClick={handlePowerOn}
        title="Click anywhere to turn on computer"
      >
        {/* ── Top Blue Bar ── */}
        <div className="sd-top-bar" />

        {/* ── Main Center Content ── */}
        <div className="sd-center-panel sd-off-panel">
          {/* Windows XP Flag */}
          <div className="sd-off-logo-wrapper">
            <img
              src="/assets/icons/windows-logo-transparent.png"
              alt="Windows XP"
              className="sd-off-flag"
            />
          </div>

          {/* Safe to Turn Off Message in White */}
          <div className="sd-off-text-block">
            <h1 className="sd-off-headline">It is now safe to turn off your computer.</h1>
            <p className="sd-off-sub">System powered down successfully</p>
          </div>

          {/* Authentic XP Luna Style Power Button */}
          <button
            className="sd-xp-power-btn"
            onClick={handlePowerOn}
            title="Press to turn on Windows XP"
          >
            <PowerIcon />
            <span className="sd-power-label">Turn On Computer</span>
          </button>

          <p className="sd-off-click-hint">or click anywhere on screen to power on</p>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="sd-bottom-bar">
          <p className="sd-copy">Yash XP Professional</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="sd-screen"
      onClick={() => setPhase('off')}
      title="Click to skip"
    >
      {/* ── Top Blue Bar ── */}
      <div className="sd-top-bar" />

      {/* ── Center Content ── */}
      <div className="sd-center-panel">
        {/* Real Windows XP Logo */}
        <div className="sd-logo-lockup">
          <img
            src="/assets/icons/windows-logo-transparent.png"
            alt="Yash XP"
            className="sd-win-logo"
          />
          <div className="sd-brand-text">
            <span className="sd-brand-name">Yash</span>
            <span className="sd-brand-xp">xp</span>
          </div>
        </div>

        {/* Shutdown status message */}
        <p className="sd-status-message">Portfolio is shutting down...</p>

        {/* Progress track with moving 3-dot runner (exact same as boot screen) */}
        <div className="sd-progress-wrap">
          <div className="sd-progress-track">
            <div className="sd-dots-runner">
              <span className="sd-bdot"></span>
              <span className="sd-bdot"></span>
              <span className="sd-bdot"></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="sd-bottom-bar">
        <p className="sd-copy">Yash XP Professional</p>
      </div>
    </div>
  )
}
