import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"

function App() {
  const [activeTab, setActiveTab] = useState('hello')
  const [theme, setTheme] = useState('light')
  
  return (
    <>
      {
    <div className="portfolio-container">
      {/* 左側サイドバー */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
      />


      {/* メインコンテンツエリア */}
      <main className="content-area">
        {/* Hello タブコンテンツ */}
        <div className={`tab-content ${activeTab === 'hello' ? 'active' : ''}`}>
          <div className="hello-content">
            <div className="hello-main">
              {/* プロフィールセクション */}
              <div className="hello-profile-section">
                <div className="hello-profile-header">
                  <h2>Sakamoto Honoka</h2>
                  <p className="subtitle">Designer, Developer, DJ</p>
                </div>

                <div className="hello-profile-body">
                  <div className="profile-image">
                    <img
                      src="images/portfolio.png"
                      alt="Profile"
                      onError={(e) => e.target.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}
                    />
                  </div>

                  <div className="social-links-compact">
                    <a
                      href="https://twitter.com/mmm_wuw"
                      target="_blank"
                      className="social-link-compact"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                      </svg>
                      <span>@mmm_wuw</span>
                    </a>

                    <a
                      href="https://instagram.com/tanka_mm"
                      target="_blank"
                      className="social-link-compact"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        />
                      </svg>
                      <span>@tanka_mm</span>
                    </a>

                    <a
                      href="https://note.com/mmm_wuw"
                      target="_blank"
                      className="social-link-compact"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path
                          d="M8 3C5.791 3 4 4.791 4 7v10c0 2.209 1.791 4 4 4h8c2.209 0 4-1.791 4-4V7c0-2.209-1.791-4-4-4H8zm0 2h8c1.105 0 2 .895 2 2v10c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2z"
                        />
                        <path d="M8 8v2h8V8H8zm0 4v2h6v-2H8z" />
                      </svg>
                      <span>@mmm_wuw</span>
                    </a>

                    <a
                      href="https://linkedin.com/in/hosaka_0x0"
                      target="_blank"
                      className="social-link-compact"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                      </svg>
                      <span>@hosaka_0x0</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* My Daily セクション */}
              <div className="hello-daily-section">
                <h2>My Daily</h2>
                <div className="daily-grid">
                  <div className="daily-card"></div>
                  <div className="daily-card"></div>
                  <div className="daily-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About タブコンテンツ */}
        <div className={`tab-content ${activeTab === 'about' ? 'active' : ''}`}>
          <div className="about-grid">
            {/* Work Experience */}
            <div className="about-section">
              <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Work Experience
              </h2>
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-period">2024.2-2024.11</div>
                  <div className="card-wrapper">
                    <div className="timeline-line"></div>
                    <div className="speech-icon">
                      <div className="speech-icon-inner"></div>
                    </div>
                    <div className="card-header" onclick="toggleCard(this)">
                      <h3 className="company-name">株式会社ツドイ</h3>
                      <span className="badge">intern</span>
                    </div>
                    <div className="card-content">
                      <div className="role-title">編集・インターン</div>
                      <p className="description">
                        記事の執筆や、ツドイの学校を通じて学びを深めました。
                      </p>
                      <div className="links">
                        <a
                          href="https://www.tbsradio.jp/articles/89310/"
                          className="link-item"
                          target="_blank"
                          >https://www.tbsradio.jp/articles/89310/</a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-period">2021.12-2022.11</div>
                  <div className="card-wrapper">
                    <div className="timeline-line"></div>
                    <div className="speech-icon">
                      <div className="speech-icon-inner"></div>
                    </div>
                    <div className="card-header" onclick="toggleCard(this)">
                      <h3 className="company-name">株式会社playground</h3>
                      <span className="badge">intern</span>
                    </div>
                    <div className="card-content">
                      <div className="role-title">OAエンジニア インターン</div>
                      <p className="description">
                        営業部門における業務フローの可視化とシステム実装による業務効率化を実施
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Awards */}
            <div className="about-section">
              <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Education & Awards
              </h2>
              <div className="event-timeline-container">
                <div className="event-timeline-item">
                  <div className="event-date">2025.2-</div>
                  <div className="event-card-wrapper">
                    <div className="event-timeline-line"></div>
                    <div
                      className="event-card-header"
                      onclick="toggleEventCard(this)"
                    >
                      <div className="event-title">CG-Arts賞</div>
                    </div>
                  </div>
                </div>

                <div className="event-timeline-item">
                  <div className="event-date">2024.8-</div>
                  <div className="event-card-wrapper">
                    <div className="event-timeline-line"></div>
                    <div
                      className="event-card-header"
                      onclick="toggleEventCard(this)"
                    >
                      <div className="event-title">
                        Jeonju Global Game Jam 2024 in Korea
                      </div>
                      <span className="event-badge">Cooperation賞</span>
                    </div>
                    <div className="event-card-content">
                      <p className="event-description">
                        韓国のゲームジャムに参加。オランダ人1名と韓国人3名でチームを組み3日でパズルゲームを制作。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="event-timeline-item">
                  <div className="event-date">2022.4-2026.3</div>
                  <div className="event-card-wrapper">
                    <div className="event-timeline-line"></div>
                    <div
                      className="event-card-header"
                      onclick="toggleEventCard(this)"
                    >
                      <div className="event-title">
                        日本大学生産工学部数理情報工学科
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Works タブコンテンツ */}
        <div className={`tab-content ${activeTab === 'works' ? 'active' : ''}`}>
          <div className="works-content">
            <h1>My Works</h1>
            <p>制作物がここに入ります</p>
          </div>
        </div>
      </main>
    </div>

  }
    </>
  )
}
export default App
