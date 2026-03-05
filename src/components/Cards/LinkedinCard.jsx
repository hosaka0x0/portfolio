import linkedinLogo from '../../assets/Linkedin.png'

function LinkedInCard() {
  return (
    <a href="https://www.linkedin.com/in/hosaka0x0/" target="_blank" rel="noopener noreferrer"
      className="bento-card bento-card-1x1 sns-card ">
      <div className="sns-icon-wrap sns-icon-linkedin">
      <img src={linkedinLogo} alt="LinkedIn"  style={{ width: '80%', height: 'auto', marginLeft: '6%' }}  />
      </div>
      <span className="sns-label">@hosaka0x0</span>
    </a>
  )
}
export default LinkedInCard