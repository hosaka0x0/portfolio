import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function WorkDetail({ client }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [work, setWork] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.get({ endpoint: "works", contentId: id })
      .then(data => { setWork(data); setLoading(false) })
      .catch(() => navigate("/"))
  }, [id])

  if (loading) return (
    <div className="wd-loading">
      <div className="wd-loading-spinner"></div>
      <span className="wd-loading-text">Loading</span>
    </div>
  )

  const color = work.works_color ?? 'var(--c-accent)'

  return (
    <div className="wd-root">
      <div className="wd-hero">

        {/* 左：情報 */}
        <div className="wd-hero-info" style={{ background: color }}>
          <button className="wd-back" onClick={() => navigate(-1)}>← Back</button>
          <h1 className="wd-title">{work.works_title}</h1>
          <div className="wd-meta-list">
            {work.works_date && (
              <div className="wd-meta-row">
                <span className="wd-meta-icon">📅</span>
                <span className="wd-meta-value">{work.works_date}</span>
              </div>
            )}
            {work.works_url && (
              <div className="wd-meta-row">
                <span className="wd-meta-icon">🔗</span>
                <a href={work.works_url} target="_blank" rel="noopener noreferrer"
                  className="wd-meta-link">{work.works_url}</a>
              </div>
            )}
            {work.works_genre?.length > 0 && (
              <div className="wd-meta-row">
                <span className="wd-meta-icon">🏷</span>
                <div className="wd-tag-list">
                  {work.works_genre.map(g => (
                    <span key={g} className="wd-tag">{g}</span>
                  ))}
                </div>
              </div>
            )}
            {work.works_stack?.length > 0 && (
              <div className="wd-meta-row">
                <span className="wd-meta-icon">🛠</span>
                <div className="wd-tag-list">
                  {work.works_stack.map(s => (
                    <span key={s} className="wd-chip">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 右：画像 */}
        <div className="wd-hero-img-wrap" style={{ background: color }}>
          {work.works_img && (
            <img src={work.works_img.url} alt={work.works_title} className="wd-hero-img" />
          )}
        </div>
      </div>

      <div className="wd-body">
        {work.works_overview && (
          <div className="wd-section">
            <p className="wd-text">{work.works_overview}</p>
          </div>
        )}
        {work.works_images?.length > 0 && (
          <div className="wd-image-grid">
            {work.works_images.map((img, i) => (
              <img key={i} src={img.url} alt={`image-${i}`} className="wd-image-grid-item" />
            ))}
          </div>
        )}
        {work.works_point && (
          <div className="wd-section">
            <h2 className="wd-section-title">デザインのポイント</h2>
            <p className="wd-text">{work.works_point}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WorkDetail