import { useState, useEffect } from 'react'
import XPWindow from './XPWindow'
import './ContactWindow.css'

export default function ContactWindow(props) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'err'
  const [statusMsg, setStatusMsg] = useState('')

  const apiBase = (import.meta.env.VITE_API_BASE || 'https://portfolio-7isj.onrender.com').replace(/\/+$/, '')

  // Pre-warm backend when window is opened so it's ready before user finishes typing
  useEffect(() => {
    fetch(`${apiBase}/health`, { mode: 'cors' }).catch(() => {})
  }, [apiBase])

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleReset = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
    setStatus(null)
    setStatusMsg('')
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    if (!form.email.trim() || !form.message.trim()) {
      setStatus('err')
      setStatusMsg('Please enter your email and message.')
      return
    }

    setStatus('sending')
    setStatusMsg('Sending message...')

    // Default name from email prefix if empty
    const submission = {
      name: form.name.trim() || form.email.split('@')[0],
      email: form.email.trim(),
      subject: form.subject.trim() || 'Portfolio Message',
      message: form.message.trim(),
    }

    const sendWithRetry = async (attempt = 1) => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 35000)

        if (attempt > 1) {
          setStatusMsg('Connecting to server, delivering...')
        }

        const res = await fetch(`${apiBase}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
          signal: controller.signal,
        })
        clearTimeout(timeoutId)

        const data = await res.json().catch(() => ({}))

        if (res.ok) {
          setStatus('ok')
          setStatusMsg('Message delivered successfully!')
          setForm({ name: '', email: '', subject: '', message: '' })
          return true
        } else if (attempt === 1) {
          await new Promise(r => setTimeout(r, 2000))
          return await sendWithRetry(2)
        } else {
          setStatus('err')
          setStatusMsg(data.message || 'Failed to send message.')
          return false
        }
      } catch {
        if (attempt === 1) {
          setStatusMsg('Waking cloud server (takes a few seconds)...')
          await new Promise(r => setTimeout(r, 3000))
          return await sendWithRetry(2)
        } else {
          setStatus('err')
          setStatusMsg('Server connection delayed. Click below to email directly.')
          return false
        }
      }
    }

    await sendWithRetry(1)
  }

  return (
    <XPWindow
      title="Contact Me"
      icon={<img src="/assets/icons/contact-me.webp" alt="" width="16" height="16" style={{ verticalAlign: 'middle', objectFit: 'contain' }} />}
      defaultPos={{ x: 140, y: 70 }}
      defaultSize={{ w: 560, h: 420 }}
      hideMenuBar={false}
      {...props}
    >
      <div className="oe-window">
        {/* Toolbar matching the screenshot */}
        <div className="oe-toolbar">
          <button
            type="button"
            className="oe-tb-btn"
            onClick={handleSubmit}
            disabled={status === 'sending'}
          >
            <span style={{ fontSize: '1rem', color: '#316AC5' }}>📨</span>
            <span>Send Message</span>
          </button>

          <button
            type="button"
            className="oe-tb-btn"
            onClick={handleReset}
          >
            <span style={{ fontSize: '1rem' }}>📄</span>
            <span>New Message</span>
          </button>

          <div className="oe-tb-sep" />

          <button
            type="button"
            className="oe-tb-btn"
            onClick={() => {
              if (form.message) {
                navigator.clipboard?.writeText(form.message)
                setForm(f => ({ ...f, message: '' }))
              }
            }}
            title="Cut"
          >
            <span>✂️</span>
          </button>

          <button
            type="button"
            className="oe-tb-btn"
            onClick={() => {
              if (form.message) navigator.clipboard?.writeText(form.message)
            }}
            title="Copy"
          >
            <span>📋</span>
          </button>

          <button
            type="button"
            className="oe-tb-btn"
            onClick={async () => {
              try {
                const text = await navigator.clipboard?.readText()
                if (text) setForm(f => ({ ...f, message: f.message + text }))
              } catch {}
            }}
            title="Paste"
          >
            <span>📑</span>
          </button>

          <div className="oe-tb-sep" />

          {/* LinkedIn Icon shortcut */}
          <a
            href="https://www.linkedin.com/in/yash-panchal-92948725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="oe-tb-btn"
            title="Open LinkedIn"
            style={{ textDecoration: 'none' }}
          >
            <span style={{
              background: '#0a66c2',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: 2,
              padding: '0 4px',
              fontSize: '0.7rem'
            }}>in</span>
          </a>

          <div className="oe-tb-right">
            <img
              src="/assets/icons/windows-xp-flag-crop.png"
              alt="Windows XP"
              className="oe-win-flag"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>

        {/* Email Header Fields matching the screenshot */}
        <div className="oe-fields">
          {/* TO: Yash <yk6255713@gmail.com> */}
          <div className="oe-field-row">
            <span className="oe-label">To:</span>
            <div className="oe-input-static">
              <strong>Yash</strong> &lt;yk6255713@gmail.com&gt;
            </div>
          </div>

          {/* FROM */}
          <div className="oe-field-row">
            <span className="oe-label">From:</span>
            <input
              className="oe-input"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>

          {/* SUBJECT */}
          <div className="oe-field-row">
            <span className="oe-label">Subject:</span>
            <input
              className="oe-input"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
            />
          </div>
        </div>

        {/* Feedback alert if any */}
        {status && (
          <div className={`oe-status-banner ${status}`}>
            <span>{status === 'ok' ? '✓' : status === 'err' ? '⚠️' : '⏳'}</span>
            <span>{statusMsg}</span>
          </div>
        )}

        {/* Message editor body */}
        <div className="oe-body-area">
          <textarea
            className="oe-textarea"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          />
        </div>

        {/* Status bar at bottom */}
        <div className="oe-statusbar">
          <span>{status === 'sending' ? 'Sending message...' : status === 'ok' ? 'Message sent' : 'Ready'}</span>
        </div>
      </div>
    </XPWindow>
  )
}
