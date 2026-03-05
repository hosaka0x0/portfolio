import instaLogo from '../../assets/Insta.png'

function InstagramCard() {
  return (
    <a href="https://www.instagram.com/tanker_mm/" target="_blank" rel="noopener noreferrer"
      className="bento-card bento-card-1x1 sns-card">
      <div className="sns-icon-wrap sns-icon-instagram">
        <img src={instaLogo} alt="Instagram" style={{ width: '80%', height: 'auto' }} />
      </div>
      <span className="sns-label">@tanker_mm</span>
    </a>
  )
}
export default InstagramCard