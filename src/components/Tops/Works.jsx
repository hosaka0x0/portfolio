function Works({activeTab,setActiveTab,theme,setTheme}){
    const works =[
        {id:1,title:'プロジェクト1',image:'https://placehold.co/400x400'},
        {id:2,title:'プロジェクト2',image:'https://placehold.co/200x200'},
        {id:3,title:'プロジェクト3',image:'https://placehold.co/200x200'},
        {id:4,title:'プロジェクト4',image:'https://placehold.co/200x200'},
        {id:5,title:'プロジェクト5',image:'https://placehold.co/200x200'}
    ]
    return(
        <div className={`tab-content ${activeTab === 'works' ? 'active' : ''}`}>
          <div className="works-content">
            <h1>My Works</h1>
            <p>制作物がここに入ります</p>
          </div>
          <div className="works-grid">
            {works.map((work)=>(
            <img src={work.image} className="work-img"/>
          ))}
          </div>
        </div>
    )
}
export default Works