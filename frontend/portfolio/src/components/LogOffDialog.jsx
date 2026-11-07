import './LogOffDialog.css'

export default function LogOffDialog({ onLogOff, onRestart, onCancel }) {
  return (
    <div className="logoff-overlay">
      <div className="logoff-dialog">
        {/* Header */}
        <div className="logoff-header">
          <span className="logoff-title">Log Off Yash Panchal XP</span>
          <img
            src="/assets/icons/windows-logo-transparent.png"
            alt="Windows"
            className="logoff-logo"
          />
        </div>

        {/* Buttons row */}
        <div className="logoff-buttons">
          <button className="logoff-btn" onClick={onRestart}>
            <img
              src="/assets/icons/restart-xp.svg"
              alt="Restart"
              width="40"
              height="40"
              style={{ objectFit: 'contain' }}
            />
            <span>Restart</span>
          </button>
          <button className="logoff-btn" data-logoff="true" onClick={onLogOff}>
            <img
              src="/assets/icons/logoff-key.png"
              alt="Log Off"
              width="36"
              height="36"
              style={{ objectFit: 'contain' }}
            />
            <span>Log Off</span>
          </button>
        </div>

        {/* Cancel */}
        <div className="logoff-footer">
          <button className="logoff-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
