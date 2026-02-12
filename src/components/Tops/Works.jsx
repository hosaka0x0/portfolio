function Works({activeTab,setActiveTab,theme,setTheme}){
    const works =[
        {id:1,title:'プロジェクト1',image:'https://placehold.co/400x400',description:'testtest'},
        {id:2,title:'プロジェクト2',image:'https://placehold.co/200x200',description:'testtest'},
        {id:3,title:'プロジェクト3',image:'https://placehold.co/200x200',description:'testtest'},
        {id:4,title:'プロジェクト4',image:'https://placehold.co/200x200',description:'testtest'},
        {id:5,title:'プロジェクト5',image:'https://placehold.co/200x200',description:'testtest'}
    ]
    return(
        <div className={`tab-content ${activeTab === 'works' ? 'active' : ''}`}>
          <div className="works-content">
            <h1>My Works</h1>
            <p>制作物がここに入ります</p>
          </div>
          <div className="works-grid">
            {works.map((work)=>(
            <div key={work.id} className="work-item">
                <div className="work-text">
                    <div className="work-title">
                        {work.title}
                    </div>
                    <div className="work-discription">
                        {work.description}
                    </div>
                </div>
            <img src={work.image} className="work-img"/>
            </div>
          ))}
          </div>
        </div>
    )
}
export default Works