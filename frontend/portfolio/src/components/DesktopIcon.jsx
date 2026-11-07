import { playClick } from '../utils/sound'
import './DesktopIcon.css'

export default function DesktopIcon({ icon, label, onDoubleClick }) {
  const triggerOpen = () => {
    playClick()
    onDoubleClick()
  }

  // Handle single tap for mobile / touch devices
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      triggerOpen()
    }
  }

  return (
    <div
      className="desktop-icon"
      onDoubleClick={triggerOpen}
      onClick={handleClick}
    >
      <div className="icon-img">{icon}</div>
      <span className="icon-label">{label}</span>
    </div>
  )
}
