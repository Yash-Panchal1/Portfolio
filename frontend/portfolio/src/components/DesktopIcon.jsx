import { playClick } from '../utils/sound'
import './DesktopIcon.css'

export default function DesktopIcon({ icon, label, onDoubleClick }) {
  const handleDoubleClick = () => {
    playClick()
    onDoubleClick()
  }

  return (
    <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
      <div className="icon-img">{icon}</div>
      <span className="icon-label">{label}</span>
    </div>
  )
}
