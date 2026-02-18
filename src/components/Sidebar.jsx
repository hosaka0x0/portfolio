function Sidebar({ activeTab, setActiveTab, theme, setTheme }) {
  return (
    <aside className="sidebar">
        {/* ナビゲーションタブ */}
        <nav className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === 'hello' ? 'active' : ''}`}
            onClick={() => setActiveTab('hello')}
          >
            <span className="tab-number">01</span>
            <span className="tab-label">Hello</span>
          </button>
          {/* <button
            className={`nav-tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <span className="tab-number">02</span>
            <span className="tab-label">About</span>
          </button> */}
          <button
            className={`nav-tab ${activeTab === 'works' ? 'active' : ''}`}
            onClick={() => setActiveTab('works')}
          >
            <span className="tab-number">02</span>
            <span className="tab-label">Works</span>
          </button>
        </nav>

        {/* プロフィール情報 */}
        <div className="profile-info">
          <p>I'm Honoka Sakamoto,</p>
          <p>Designer based in Japan.</p>
          <p className="greeting">Thank you</p>
          <p>for visiting my portfolio.</p>
          <p className="email">hosaka0x0@gmail.com</p>
        </div>

      </aside>
  )
}
export default Sidebar