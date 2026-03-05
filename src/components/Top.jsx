import Hello from "./Tops/Hello.jsx"
import Works from "./Tops/Works.jsx"
import Diary from "./Tops/Diary.jsx"

function Top({ activeTab, setActiveTab, theme, setTheme, client }) {
  return (
    <main className="content-area">
      <Hello
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
        client={client}
      />
      <Works
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
      />
      <Diary
        activeTab={activeTab}
        client={client}
      />
    </main>
  )
}

export default Top