import xLogo from '../../assets/X.png'

function XCard() {
  return (
    <a href="https://x.com/@mmm_wuw" target="_blank" rel="noopener noreferrer"
      className="bento-card bento-card-1x1 sns-card ">
      <div className="sns-icon-wrap sns-icon-twitter">
      <img src={xLogo} alt="X" style={{ width: '80%', height: 'auto' }} />
      </div>
      <span className="sns-label">@mmm_wuw</span>
    </a>
  )
}
export default XCard