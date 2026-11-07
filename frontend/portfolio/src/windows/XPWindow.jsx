import { useState, useRef, useCallback, useEffect } from 'react'
import './XPWindow.css'

export default function XPWindow({
  title, icon, children,
  isActive, isMinimized,
  onFocus, onClose, onMinimize,
  defaultPos = { x: 120, y: 60 },
  defaultSize = { w: 650, h: 480 },
  hideMenuBar = false
}) {
  const [pos, setPos] = useState(defaultPos)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const [maximized, setMaximized] = useState(isMobile)
  const [showViewMenu, setShowViewMenu] = useState(false)
  const preMax = useRef({ pos: defaultPos, size: defaultSize })
  const viewMenuRef = useRef(null)

  // Close view menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (viewMenuRef.current && !viewMenuRef.current.contains(e.target)) {
        setShowViewMenu(false)
      }
    }
    if (showViewMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showViewMenu])

  const onMouseDown = useCallback((e) => {
    if (e.target.closest('button') || e.target.closest('.xp-menu-dropdown') || maximized) return
    const startX = e.clientX - pos.x
    const startY = e.clientY - pos.y

    const onMove = (ev) => {
      setPos({ x: ev.clientX - startX, y: ev.clientY - startY })
    }
    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [pos, maximized])

  const toggleMaximize = () => {
    if (!maximized) {
      preMax.current = { pos, size: defaultSize }
      setMaximized(true)
    } else {
      setPos(preMax.current.pos)
      setMaximized(false)
    }
    setShowViewMenu(false)
  }

  const handleMinimize = (e) => {
    setShowViewMenu(false)
    if (onMinimize) onMinimize(e)
  }

  if (isMinimized) return null

  const style = maximized
    ? { left: 0, top: 0, width: '100vw', height: 'calc(100vh - 36px)', borderRadius: 0 }
    : { left: pos.x, top: pos.y, width: defaultSize.w, height: defaultSize.h }

  return (
    <div
      className={`xp-window ${isActive ? 'active' : 'inactive'} ${maximized ? 'maximized' : ''}`}
      style={style}
      onMouseDown={onFocus}
    >
      {/* Title bar */}
      <div className="xp-titlebar" onMouseDown={onMouseDown} onDoubleClick={toggleMaximize}>
        <div className="xp-titlebar-left">
          <span className="xp-title-icon">{icon}</span>
          <span className="xp-title-text">{title}</span>
        </div>
        <div className="xp-titlebar-btns">
          <button
            className="xp-btn minimize"
            tabIndex={-1}
            onClick={(e) => { e.currentTarget.blur(); handleMinimize(e); }}
            onKeyDown={(e) => { if (e.code === 'Space' || e.key === ' ') e.preventDefault(); }}
            title="Minimize"
          >_</button>
          <button
            className="xp-btn maximize"
            tabIndex={-1}
            onClick={(e) => { e.currentTarget.blur(); toggleMaximize(); }}
            onKeyDown={(e) => { if (e.code === 'Space' || e.key === ' ') e.preventDefault(); }}
            title={maximized ? 'Restore' : 'Maximize'}
          >
            {maximized ? '❐' : '□'}
          </button>
          <button
            className="xp-btn close"
            tabIndex={-1}
            onClick={(e) => { e.currentTarget.blur(); onClose(e); }}
            onKeyDown={(e) => { if (e.code === 'Space' || e.key === ' ') e.preventDefault(); }}
            title="Close"
          >✕</button>
        </div>
      </div>

      {/* Menu bar */}
      {!hideMenuBar && (
        <div className="xp-menubar">
          <span className="xp-menu-item">File</span>
          <span className="xp-menu-item disabled">Edit</span>
          
          {/* VIEW dropdown item */}
          <div className="xp-menu-dropdown-container" ref={viewMenuRef}>
            <span
              className={`xp-menu-item ${showViewMenu ? 'active' : ''}`}
              onClick={() => setShowViewMenu(v => !v)}
            >
              View
            </span>
            {showViewMenu && (
              <div className="xp-menu-dropdown">
                <div
                  className="xp-dropdown-item"
                  onClick={toggleMaximize}
                >
                  <span className="xp-dropdown-icon">{maximized ? '❐' : '□'}</span>
                  <span>{maximized ? 'Restore Window' : 'Maximize Window'}</span>
                </div>
                <div
                  className="xp-dropdown-item"
                  onClick={handleMinimize}
                >
                  <span className="xp-dropdown-icon">_</span>
                  <span>Minimize Window</span>
                </div>
              </div>
            )}
          </div>

          <span className="xp-menu-item disabled">Help</span>
        </div>
      )}

      {/* Content */}
      <div className="xp-content">
        {children}
      </div>
    </div>
  )
}
