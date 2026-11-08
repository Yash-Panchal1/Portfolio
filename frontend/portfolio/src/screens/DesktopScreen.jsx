import { useState, useEffect, useMemo } from 'react'
import './DesktopScreen.css'
import Taskbar from '../components/Taskbar'
import StartMenu from '../components/StartMenu'
import ContextMenu from '../components/ContextMenu'
import LogOffDialog from '../components/LogOffDialog'
import DesktopIcon from '../components/DesktopIcon'
import { AboutMeIcon, ResumeIcon, ProjectsIcon, ContactIcon, LinkedInIcon, PinballIcon } from '../components/XPIcons'
import AboutWindow from '../windows/AboutWindow'
import ResumeWindow from '../windows/ResumeWindow'
import ProjectsWindow from '../windows/ProjectsWindow'
import ContactWindow from '../windows/ContactWindow'
import PinballWindow from '../windows/PinballWindow'

const defaultIcons = [
  { id: 'about',    label: 'About Me',    iconComp: AboutMeIcon,   component: AboutWindow },
  { id: 'resume',   label: 'My Resume',   iconComp: ResumeIcon,    component: ResumeWindow },
  { id: 'projects', label: 'My Projects', iconComp: ProjectsIcon,  component: ProjectsWindow },
  { id: 'contact',  label: 'Contact Me',  iconComp: ContactIcon,   component: ContactWindow },
  { id: 'linkedin', label: 'LinkedIn',    iconComp: LinkedInIcon,  isExternal: true, url: 'https://www.linkedin.com/in/yash-panchal-92948725a/' },
]

// All openable window applications (including programs only launched from Start Menu)
const allApps = [
  ...defaultIcons,
  { id: 'pinball',  label: '3D Pinball',  iconComp: PinballIcon,   component: PinballWindow },
]

export default function DesktopScreen({ onLogOff, onShutdown }) {
  const [openWindows, setOpenWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)
  const [showNotif, setShowNotif] = useState(true)
  const [minimized, setMinimized] = useState([])
  const [startOpen, setStartOpen] = useState(false)
  const [iconOrder, setIconOrder] = useState('default') // 'default' | 'name'
  const [ctxMenu, setCtxMenu] = useState(null) // { x, y } or null
  const [showLogOff, setShowLogOff] = useState(false)

  // Play XP startup sound & pre-warm backend so contact service is ready 24/7
  useEffect(() => {
    const audio = new Audio('/assets/audio/startup.mp3')
    audio.volume = 0.5
    audio.play().catch(() => {})

    // Background pre-warm for Render backend
    const apiBase = (import.meta.env.VITE_API_BASE || 'https://portfolio-7isj.onrender.com').replace(/\/+$/, '')
    fetch(`${apiBase}/health`, { mode: 'cors' }).catch(() => {})
  }, [])

  // Sorted icons
  const icons = useMemo(() => {
    if (iconOrder === 'name') {
      return [...defaultIcons].sort((a, b) => a.label.localeCompare(b.label))
    }
    return defaultIcons
  }, [iconOrder])

  const openWindow = (id) => {
    const iconDef = allApps.find(i => i.id === id)
    if (iconDef?.isExternal) {
      window.open(iconDef.url, '_blank')
      return
    }
    if (!openWindows.includes(id)) {
      setOpenWindows(prev => [...prev, id])
    }
    setMinimized(prev => prev.filter(m => m !== id))
    setActiveWindow(id)
  }

  const closeWindow = (id) => {
    setOpenWindows(prev => prev.filter(w => w !== id))
    setActiveWindow(null)
  }

  const minimizeWindow = (id) => {
    setMinimized(prev => [...prev, id])
    setActiveWindow(null)
  }

  const toggleMinimize = (id) => {
    if (minimized.includes(id)) {
      setMinimized(prev => prev.filter(m => m !== id))
      setActiveWindow(id)
    } else {
      minimizeWindow(id)
    }
  }

  // Right-click context menu
  const handleContextMenu = (e) => {
    e.preventDefault()
    // Only show on desktop background, not on icons/windows
    if (e.target.closest('.desktop-icon, .xp-window, .taskbar, .start-menu, .xp-notif')) return
    setCtxMenu({ x: e.clientX, y: e.clientY })
  }

  const handleCtxAction = (action) => {
    switch (action) {
      case 'arrange-name':
        setIconOrder('name')
        break
      case 'arrange-default':
        setIconOrder('default')
        break
      case 'reset':
        setOpenWindows([])
        setActiveWindow(null)
        setMinimized([])
        setStartOpen(false)
        setIconOrder('default')
        break
      case 'show-desktop':
        setMinimized([...openWindows])
        setActiveWindow(null)
        break
      case 'refresh':
        window.location.reload()
        break
      case 'fullscreen':
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {})
        } else {
          document.exitFullscreen().catch(() => {})
        }
        break
      case 'paste':
        break
    }
  }

  return (
    <>
    <div className={`desktop ${showLogOff ? 'dimmed' : ''}`} onContextMenu={handleContextMenu}>
      {/* Desktop icons */}
      <div className="desktop-icons">
        {icons.map(iconDef => {
          const IconComp = iconDef.iconComp
          return (
            <DesktopIcon
              key={iconDef.id}
              icon={<IconComp />}
              label={iconDef.label}
              onDoubleClick={() => openWindow(iconDef.id)}
            />
          )
        })}
      </div>

      {/* Open windows */}
      {openWindows.map(id => {
        const iconDef = allApps.find(i => i.id === id)
        if (!iconDef || !iconDef.component) return null
        const WindowComp = iconDef.component
        const isMinimized = minimized.includes(id)
        return (
          <WindowComp
            key={id}
            isActive={activeWindow === id}
            isMinimized={isMinimized}
            onFocus={() => setActiveWindow(id)}
            onClose={() => closeWindow(id)}
            onMinimize={() => minimizeWindow(id)}
          />
        )
      })}

      {/* XP Notification bubble */}
      {showNotif && (
        <div className="xp-notif">
          <button className="xp-notif-close" onClick={() => setShowNotif(false)}>✕</button>
          <strong>Welcome to Yash XP</strong>
          <ul>
            <li>My portfolio, built as a Windows XP desktop.</li>
            <li>Double-click an icon to get started</li>
          </ul>
        </div>
      )}

      {/* Right-click context menu */}
      {ctxMenu && (
        <ContextMenu
          x={ctxMenu.x}
          y={ctxMenu.y}
          onClose={() => setCtxMenu(null)}
          onAction={handleCtxAction}
        />
      )}

      {/* Start Menu */}
      {startOpen && (
        <>
          <div className="start-overlay" onClick={() => setStartOpen(false)} />
          <StartMenu
            onClose={() => setStartOpen(false)}
            onOpenWindow={openWindow}
            onLogOff={() => { setStartOpen(false); setShowLogOff(true) }}
            onShutdown={() => { setStartOpen(false); onShutdown() }}
          />
        </>
      )}

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows}
        icons={allApps}
        activeWindow={activeWindow}
        minimized={minimized}
        onIconClick={toggleMinimize}
        onStartClick={() => setStartOpen(prev => !prev)}
        startOpen={startOpen}
      />
    </div>

    {/* Log Off Dialog — outside .desktop so it's not dimmed */}
    {showLogOff && (
      <LogOffDialog
        onLogOff={onLogOff}
        onRestart={() => window.location.reload()}
        onCancel={() => setShowLogOff(false)}
      />
    )}
    </>
  )
}
