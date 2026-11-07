import { useState, useRef, useEffect, useCallback } from 'react'
import XPWindow from './XPWindow'
import './PinballWindow.css'

export default function PinballWindow(props) {
  const [loadError, setLoadError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const iframeRef = useRef(null)

  // Focus the iframe so keyboard events (Space, Z, /, Arrows) and audio work
  const focusGame = useCallback(() => {
    setIsFocused(true)
    if (iframeRef.current) {
      try {
        iframeRef.current.focus()
        iframeRef.current.contentWindow?.focus()
      } catch (err) {
        // cross-origin restriction safe guard
      }
    }
  }, [])

  // Auto-focus when window becomes active
  useEffect(() => {
    if (props.isActive && !props.isMinimized) {
      const timer = setTimeout(focusGame, 100)
      return () => clearTimeout(timer)
    }
  }, [props.isActive, props.isMinimized, focusGame])

  // Prevent Spacebar from triggering window actions outside the game
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!props.isActive || props.isMinimized) return
      // If Space or game keys are pressed while iframe does not have focus
      if (['Space', 'KeyZ', 'Slash', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
        if (document.activeElement !== iframeRef.current) {
          focusGame()
          if (e.code === 'Space') {
            e.preventDefault()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [props.isActive, props.isMinimized, focusGame])

  const handleRestart = () => {
    if (iframeRef.current) {
      iframeRef.current.src = 'https://98.js.org/programs/pinball/space-cadet.html'
      setTimeout(focusGame, 300)
    }
  }

  return (
    <XPWindow
      title="3D Pinball for Yash XP"
      icon={<img src="/assets/icons/pinball.png" alt="" width="16" height="16" style={{ verticalAlign: 'middle', objectFit: 'contain' }} />}
      defaultPos={{ x: 120, y: 30 }}
      defaultSize={{ w: 608, h: 505 }}
      hideMenuBar={true}
      {...props}
    >
      <div className="pinball-container" onClick={focusGame}>
        {/* Authentic Windows XP Pinball Menu Bar */}
        <div className="pinball-menubar">
          <span className="pm-item" onClick={handleRestart}>New Game (F2)</span>
          <span className="pm-item" onClick={focusGame}>Options</span>
          <span className="pm-item" onClick={focusGame}>Help</span>
          <div className="pm-status" onClick={focusGame}>
            {isFocused ? '🟢 Sound & Controls Active' : '🔊 Click to Enable Sound'}
          </div>
        </div>

        {/* Embedded Space Cadet Pinball Canvas */}
        <div className="pinball-frame-wrap" onClick={focusGame}>
          {!isFocused && (
            <div className="pinball-start-overlay" onClick={focusGame}>
              <div className="pinball-start-card">
                <img src="/assets/icons/pinball.png" alt="Pinball" width="36" height="36" />
                <div className="pinball-start-text">
                  <h3>Click Anywhere to Play</h3>
                  <p>Enables full game sound and keyboard controls</p>
                </div>
                <button className="pinball-play-btn" onClick={focusGame}>Start Game</button>
              </div>
            </div>
          )}

          {!loadError ? (
            <iframe
              ref={iframeRef}
              id="pinball-iframe-player"
              src="https://98.js.org/programs/pinball/space-cadet.html"
              title="3D Pinball Space Cadet"
              className="pinball-iframe"
              allow="autoplay *; fullscreen *; gamepad *"
              tabIndex={0}
              onLoad={() => {
                focusGame()
              }}
              onError={() => setLoadError(true)}
            />
          ) : (
            <div className="pinball-fallback">
              <p>⚠️ Pinball player failed to load.</p>
              <button
                className="pinball-reload-btn"
                onClick={() => { setLoadError(false); handleRestart(); }}
              >
                Retry Loading
              </button>
            </div>
          )}
        </div>

        {/* Bottom Control Helpers matching XP Bar */}
        <div className="pinball-bottom-bar">
          <span><strong>Launch Ball:</strong> Space (hold to pull plunger)</span>
          <span><strong>Left Flipper:</strong> Z</span>
          <span><strong>Right Flipper:</strong> / (slash)</span>
        </div>
      </div>
    </XPWindow>
  )
}
