import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar.jsx"
import Top from "./components/Top.jsx"
import WorkDetail from "./components/Pages/WorkDetail.jsx"
import DiaryDetail from "./components/Pages/DiaryDetail.jsx"
import { createClient } from "microcms-js-sdk"

const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
})

function App() {
  const [activeTab, setActiveTab] = useState('hello')
  const [theme, setTheme] = useState('light')

  return (
    <BrowserRouter basename="/">
      <div className="portfolio-container">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme={theme}
          setTheme={setTheme}
        />
        <Routes>
          <Route path="/" element={
            <Top
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              theme={theme}
              setTheme={setTheme}
              client={client}
            />
          } />
          <Route path="/works/:id" element={
            <div className="content-area" style={{ padding: 0 }}>
              <WorkDetail client={client} />
            </div>
          } />
          <Route path="/diary/:id" element={
            <div className="content-area" style={{ padding: 0 }}>
              <DiaryDetail client={client} />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App