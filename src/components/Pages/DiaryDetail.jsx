import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function DiaryDetail({ client }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [diary, setDiary] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.get({ endpoint: 'diary', contentId: id })
      .then(data => { setDiary(data); setLoading(false) })
      .catch(() => navigate('/'))
  }, [id])

  if (loading) return (
    <div className="wd-loading">
      <div className="wd-loading-spinner"></div>
      <span className="wd-loading-text">Loading</span>
    </div>
  )

  return (
    <div className="dd-root">
      <div className="dd-date-col">
        <button className="dd-back" onClick={() => navigate(-1)}>←</button>
        <div className="dd-date-year">{diary.diary_date?.slice(0, 4)}</div>
        <div className="dd-date-md">{diary.diary_date?.slice(5)}</div>
      </div>
      <div className="dd-content">
        {diary.diary_img && (
          <img src={diary.diary_img.url} alt="" className="dd-img" />
        )}
        <p className="dd-body">{diary.diary_body}</p>
      </div>
    </div>
  )
}

export default DiaryDetail