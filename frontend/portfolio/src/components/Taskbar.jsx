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
        <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M0 12.5 L40 7 L40 42 L0 42 Z" fill="#F25022"/>
          <path d="M44 6.5 L88 0 L88 42 L44 42 Z" fill="#7FBA00"/>
          <path d="M0 46 L40 46 L40 81 L0 75.5 Z" fill="#00A4EF"/>
          <path d="M44 46 L88 46 L88 88 L44 81.5 Z" fill="#FFB900"/>
        </svg>
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
