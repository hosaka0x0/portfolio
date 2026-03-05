import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createClient } from "microcms-js-sdk"

const PER_PAGE = 6

function Diary({ activeTab }) {
  const [diaries, setDiaries] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    const client = createClient({
      serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
      apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
    })
    client.getList({
      endpoint: 'diary',
      queries: {
        limit: PER_PAGE,
        offset: (page - 1) * PER_PAGE,
        orders: '-diary_date',
      }
    }).then(res => {
      setDiaries(res.contents)
      setTotalCount(res.totalCount)
    })
  }, [page])

  const totalPages = Math.ceil(totalCount / PER_PAGE)

  return (
    <div className={`tab-content ${activeTab === 'diary' ? 'active' : ''}`}>
      <div className="diary-grid">
        {diaries.map((d) => (
      <div
        key={d.id}
        className="diary-mag-card"
        onClick={() => navigate(`/diary/${d.id}`)}
      >
        {d.diary_img
          ? <img src={d.diary_img.url} alt="" className="diary-mag-img" />
          : <div className="diary-mag-img-placeholder" />
        }
        <div className="diary-mag-body">
          <div className="diary-mag-date">{d.diary_date}</div>
          <p className="diary-mag-text">{d.diary_body?.slice(0, 60)}...</p>
        </div>
      </div>
    ))}
      </div>

      {totalPages > 1 && (
        <div className="diary-pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              className={`diary-page-btn ${p === page ? 'active' : ''}`}
              onClick={() => setPage(p)}
            >{p}</button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Diary