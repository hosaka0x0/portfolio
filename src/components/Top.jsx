import Hello from "./Tops/Hello.jsx"
function Top({activeTab,setActiveTab,theme,setTheme}) {
    return(
        <main className="content-area">
        {/* Hello タブコンテンツ */}
        <Hello
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            theme={theme}
            setTheme={setTheme}
        />

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
    )
}
export default Top