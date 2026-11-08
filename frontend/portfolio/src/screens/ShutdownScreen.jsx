import { useState, useEffect } from 'react'
import { playShutdown, playClick } from '../utils/sound'
import './ShutdownScreen.css'

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
      <div className="sd-off-screen" onClick={handlePowerOn} title="Click anywhere to turn on computer">
        {/* Subtle CRT scanline overlay */}
        <div className="sd-crt-overlay" />

        {/* Ambient CRT vignette */}
        <div className="sd-crt-vignette" />

        {/* Main Center Content */}
        <div className="sd-off-center">
          {/* Glowing Vintage Windows Flag */}
          <div className="sd-off-logo-wrapper">
            <img
              src="/assets/icons/windows-logo-transparent.png"
              alt="Windows XP"
              className="sd-off-flag"
            />
          </div>

          {/* Authentic Safe to Turn Off Message */}
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
            <span className="sd-power-icon">⏻</span>
            <span className="sd-power-label">Turn On Computer</span>
          </button>

          <p className="sd-off-click-hint">or click anywhere on screen to power on</p>
        </div>

        {/* CRT Monitor Standby Bezel Bar */}
        <div className="sd-crt-bezel-bar">
          <div className="sd-monitor-brand">SYNCMASTER CRT</div>
          <div className="sd-standby-led-group">
            <span className="sd-led-label">STANDBY</span>
            <span className="sd-standby-led" />
          </div>
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
            alt="Windows XP"
            className="sd-win-logo"
          />
          <div className="sd-brand-text">
            <span className="sd-brand-name">Windows</span>
            <span className="sd-brand-xp">xp</span>
          </div>
        </div>

        {/* Shutdown status message */}
        <p className="sd-status-message">Windows is shutting down...</p>

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
        <p className="sd-copy">Microsoft® Windows® XP Professional</p>
      </div>
    </div>
  )
}
