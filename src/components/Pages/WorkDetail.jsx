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

      {work.works_content && (
        <div className="wd-body">
          <div
            className="wd-rich-content"
            dangerouslySetInnerHTML={{ __html: work.works_content }}
          />
        </div>
      )}
    </div>
  )
}

export default WorkDetail