import { useNavigate } from "react-router-dom"

function Sidebar({ activeTab, setActiveTab, theme, setTheme }) {
  const navigate = useNavigate()

  function handleTab(tab) {
    setActiveTab(tab)
    navigate('/')
  }

  return (
    <aside className="sidebar">
      <nav className="nav-tabs">
        <button
          className={`nav-tab ${activeTab === 'hello' ? 'active' : ''}`}
          onClick={() => handleTab('hello')}
        >
          <span className="tab-number">01</span>
          <span className="tab-label">Hello</span>
        </button>
        <button
          className={`nav-tab ${activeTab === 'works' ? 'active' : ''}`}
          onClick={() => handleTab('works')}
        >
          <span className="tab-number">02</span>
          <span className="tab-label">Works</span>
        </button>
        <button
          className={`nav-tab ${activeTab === 'diary' ? 'active' : ''}`}
          onClick={() => handleTab('diary')}
        >
          <span className="tab-number">03</span>
          <span className="tab-label">Diary</span>
        </button>
      </nav>

      <div className="profile-info">
        <p>I'm Honoka Sakamoto,</p>
        <p>Creater based in Japan.</p>
        <p className="greeting">Thank you</p>
        <p>for visiting my portfolio.</p>
        <p className="email">hosaka0x0@gmail.com</p>
      </div>
    </aside>
  )
}

export default Sidebar