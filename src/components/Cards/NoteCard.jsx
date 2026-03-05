import noteLogo from '../../assets/note.png'

function NoteCard() {
  return (
    <a
      href="https://note.com/mmm_wuw"
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card bento-card-1x1 sns-card"
    >
      <div className="sns-icon-wrap sns-icon-note">
        <img src={noteLogo} alt="note" style={{ width: '100%', height: 'auto' }} />
      </div>
      <span className="sns-label">@mmm_wuw</span>
    </a>
  )
}

export default NoteCard