import { useState } from 'react'
import './ContextMenu.css'

export default function ContextMenu({ x, y, onClose, onAction }) {
  const [showArrange, setShowArrange] = useState(false)

  const handle = (action) => {
    onAction(action)
    onClose()
  }

  return (
    <>
      <div className="ctx-overlay" onClick={onClose} onContextMenu={e => { e.preventDefault(); onClose() }} />
      <div className="ctx-menu" style={{ left: x, top: y }}>

        {/* Arrange Icons By */}
        <div
          className="ctx-item has-sub"
          onMouseEnter={() => setShowArrange(true)}
          onMouseLeave={() => setShowArrange(false)}
        >
          <span>Arrange Icons By</span>
          <span className="ctx-arrow">▶</span>

          {showArrange && (
            <div className="ctx-submenu">
              <button className="ctx-item" onClick={() => handle('arrange-name')}>By Name</button>
              <button className="ctx-item" onClick={() => handle('arrange-default')}>By Default</button>
            </div>
          )}
        </div>

        <div className="ctx-sep"></div>

        <button className="ctx-item" onClick={() => handle('paste')}>Paste</button>
        <button className="ctx-item" onClick={() => handle('reset')}>Reset Desktop</button>
        <button className="ctx-item" onClick={() => handle('show-desktop')}>Show Desktop</button>

        <div className="ctx-sep"></div>

        <button className="ctx-item" onClick={() => handle('refresh')}>
          Refresh Page
        </button>

        <div className="ctx-sep"></div>

        <button className="ctx-item" onClick={() => handle('fullscreen')}>
          Fullscreen
        </button>
      </div>
    </>
  )
}
