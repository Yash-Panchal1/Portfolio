import { useState, useEffect } from 'react'
import XPWindow from './XPWindow'
import './ProjectsWindow.css'
import { REPO_CUSTOM_META } from '../data/repoMeta'

const GITHUB_USER = 'Yash-Panchal1'
const GITHUB_API  = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
  Python:     '#3572A5',
  Java:       '#b07219',
  default:    '#8b949e',
}

function langColor(lang) { return LANG_COLORS[lang] || LANG_COLORS.default }

// If repo has custom thumbnail in REPO_CUSTOM_META, use it! Otherwise fallback to GitHub open-graph
function getThumbnail(repoName) {
  if (REPO_CUSTOM_META[repoName]?.image) {
    return REPO_CUSTOM_META[repoName].image
  }
  return `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repoName}`
}

function getTitle(repo) {
  if (REPO_CUSTOM_META[repo.name]?.title) {
    return REPO_CUSTOM_META[repo.name].title
  }
  return repo.name.replace(/[-_]/g, ' ')
}

function getDescription(repo) {
  if (REPO_CUSTOM_META[repo.name]?.description) {
    return REPO_CUSTOM_META[repo.name].description
  }
  return repo.description || 'Full-stack development project with clean code architecture and responsive UI.'
}

function getTechStack(repo) {
  if (REPO_CUSTOM_META[repo.name]?.techStack) {
    return REPO_CUSTOM_META[repo.name].techStack
  }
  return repo.language ? [repo.language] : []
}

function getLiveUrl(repo) {
  return repo.homepage || REPO_CUSTOM_META[repo.name]?.liveUrl || ''
}

export default function ProjectsWindow(props) {
  const [repos,    setRepos]    = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch(GITHUB_API, { headers: { Accept: 'application/vnd.github+json' } })
      .then(r => { if (!r.ok) throw new Error(`GitHub API ${r.status}`); return r.json() })
      .then(data => setRepos(data.filter(r => !r.fork)))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const addressUrl = selected
    ? `https://github.com/${GITHUB_USER}/${selected.name}`
    : `https://github.com/${GITHUB_USER}`

  return (
    <XPWindow
      title="My Projects"
      icon={<img src="/assets/icons/my-projects.webp" alt="" width="16" height="16" style={{ verticalAlign: 'middle', objectFit: 'contain' }} />}
      defaultPos={{ x: 100, y: 40 }}
      defaultSize={{ w: 780, h: 540 }}
      {...props}
    >
      <div className="proj-browser">

        {/* ── Toolbar ── */}
        <div className="proj-toolbar">
          <button className="proj-tb-btn" onClick={() => setSelected(null)}>🏠 Home</button>
          <button className="proj-tb-btn" onClick={() => setSelected(null)} disabled={!selected}>◀ Back</button>
          <button className="proj-tb-btn" disabled>▶ Forward</button>
          <button className="proj-tb-btn" disabled>⭐ Favorites</button>
        </div>

        {/* ── Address bar ── */}
        <div className="proj-address-bar">
          <span className="proj-addr-label">Address</span>
          <div className="proj-addr-input">
            <span className="proj-addr-icon">🔒</span>
            <span style={{ fontSize: '0.72rem', color: '#333' }}>{addressUrl}</span>
          </div>
          <button className="proj-addr-go" onClick={() => window.open(addressUrl, '_blank')}>▶</button>
        </div>

        {/* ── Content ── */}
        <div className="proj-content-area">

          {/* Sidebar */}
          <div className="proj-sidebar">
            <button className="proj-sb-btn active" title="All Repos" onClick={() => setSelected(null)}>🏠</button>
          </div>

          {/* Main panel */}
          <div className="proj-main">

            {/* ═══ LIST VIEW ═══ */}
            {!selected && (
              <>
                <div className="proj-main-header">
                  <h2 className="proj-main-title">🚀 My Projects</h2>
                  <span className="proj-repo-count">
                    {!loading && !error && `${repos.length} repositories`}
                  </span>
                </div>

                {loading && <div className="proj-loading">⏳ Loading from GitHub…</div>}
                {error   && <div className="proj-loading proj-error">⚠️ {error}</div>}
                {!loading && !error && repos.length === 0 && (
                  <div className="proj-loading">No public repositories found.</div>
                )}

                {!loading && !error && repos.length > 0 && (
                  <div className="proj-grid">
                    {repos.map(repo => {
                      const title = getTitle(repo)
                      const desc = getDescription(repo)
                      const thumb = getThumbnail(repo.name)
                      const stack = getTechStack(repo)

                      return (
                        <div
                          key={repo.id}
                          className="proj-card"
                          onClick={() => setSelected(repo)}
                        >
                          {/* Thumbnail */}
                          <div className="proj-thumb-wrap">
                            <img
                              src={thumb}
                              alt={repo.name}
                              className="proj-thumb-img"
                              onError={e => {
                                e.currentTarget.style.display = 'none'
                                e.currentTarget.nextSibling.style.display = 'flex'
                              }}
                            />
                            <div className="proj-thumb-fallback" style={{ display: 'none' }}>
                              <span>{repo.name.charAt(0).toUpperCase()}</span>
                            </div>
                          </div>

                          {/* Info */}
                          <div className="proj-card-body">
                            <h3 className="proj-card-title">{title}</h3>
                            <p className="proj-card-desc">{desc}</p>
                            
                            {/* Tech Stack badges */}
                            <div className="proj-card-footer">
                              {stack.slice(0, 3).map(tech => (
                                <span key={tech} className="proj-tech-pill">
                                  {tech}
                                </span>
                              ))}
                              {stack.length > 3 && (
                                <span className="proj-tech-pill">+{stack.length - 3}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </>
            )}

            {/* ═══ DETAIL VIEW ═══ */}
            {selected && (() => {
              const title = getTitle(selected)
              const desc = getDescription(selected)
              const thumb = getThumbnail(selected.name)
              const stack = getTechStack(selected)
              const liveUrl = getLiveUrl(selected)

              return (
                <div className="proj-detail">
                  {/* Back bar */}
                  <div className="proj-detail-topbar">
                    <button className="proj-back-btn" onClick={() => setSelected(null)}>
                      ◀ Back to Projects
                    </button>
                  </div>

                  {/* Big thumbnail */}
                  <div className="proj-detail-thumb">
                    <img
                      src={thumb}
                      alt={selected.name}
                      className="proj-detail-img"
                      onError={e => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="proj-detail-fallback" style={{ display: 'none' }}>
                      <span>{selected.name.charAt(0).toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Info panel */}
                  <div className="proj-detail-info">
                    <h2 className="proj-detail-title">{title}</h2>

                    <p className="proj-detail-desc">{desc}</p>

                    {/* Tech stack tags */}
                    <div className="proj-detail-stack">
                      {stack.map(tech => (
                        <span key={tech} className="proj-detail-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Meta stats */}
                    <div className="proj-detail-meta">
                      {selected.language && (
                        <span className="proj-lang">
                          <span className="proj-lang-dot" style={{ background: langColor(selected.language) }} />
                          {selected.language}
                        </span>
                      )}
                      {selected.stargazers_count > 0 && (
                        <span style={{ color: '#aaa', fontSize: '0.75rem' }}>
                          ⭐ {selected.stargazers_count} stars
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="proj-detail-actions">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proj-detail-live-btn"
                        >
                          🌐 View Live Demo
                        </a>
                      )}
                      <a
                        href={selected.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-detail-gh-btn"
                      >
                        ⊙ View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              )
            })()}

          </div>
        </div>
      </div>
    </XPWindow>
  )
}
