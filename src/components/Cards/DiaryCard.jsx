import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function DiaryCard({ client , setActiveTab }) {
  const [latest, setLatest] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    client.getList({
      endpoint: 'diary',
      queries: { limit: 1, orders: '-diary_date' }
    }).then(res => {
      if (res.contents.length > 0) setLatest(res.contents[0])
    })
  }, [])

  return (
    <div
    className="bento-card card-diary diary-bento-card"
    onClick={() => {
        setActiveTab('diary')
        navigate('/')
    }}
>
      <div className="dbc-img-wrap">
        {latest?.diary_img
          ? <img src={latest.diary_img.url} alt="" className="dbc-img" />
          : <div className="dbc-img-placeholder" />
        }
        {latest?.diary_date && (
          <div className="dbc-date">{latest.diary_date}</div>
        )}
      </div>
      <div className="dbc-body">
        <div className="dbc-label">Diary</div>
        {latest && (
          <p className="dbc-text">{latest.diary_body?.slice(0, 60)}...</p>
        )}
        <div className="dbc-more">all entries →</div>
      </div>
    </div>
  )
}

export default DiaryCard