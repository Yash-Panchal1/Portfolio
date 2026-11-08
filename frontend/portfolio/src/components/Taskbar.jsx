import { useState, useEffect } from 'react'
import './Taskbar.css'

function LiveClock() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  )
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }, 10000)
    return () => clearInterval(id)
  }, [])
  return <span className="clock-time">{time}</span>
}

export default function Taskbar({ openWindows, icons, activeWindow, minimized, onIconClick, onStartClick, startOpen }) {
  return (
    <div className="taskbar">
      {/* Start button */}
      <button className={`start-btn ${startOpen ? 'pressed' : ''}`} onClick={onStartClick}>
        <img
          src="/assets/icons/windows-logo-transparent.png"
          alt="Windows Logo"
          className="start-win-logo"
        />
        <span>start</span>
      </button>

      {/* Open window buttons */}
      <div className="taskbar-windows">
        {openWindows.map(id => {
          const iconDef = icons.find(i => i.id === id)
          if (!iconDef) return null
          const isActive = activeWindow === id && !minimized.includes(id)
          const IconComp = iconDef.iconComp
          return (
            <button
              key={id}
              className={`taskbar-btn ${isActive ? 'active' : ''}`}
              onClick={() => onIconClick(id)}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', width: 16, height: 16 }}>
                {IconComp ? <IconComp /> : '📄'}
              </span>
              <span>{iconDef.label}</span>
            </button>
          )
        })}
      </div>

      {/* System tray / clock */}
      <div className="taskbar-clock">
        <LiveClock />
      </div>
    </div>
  )
}
