function SNSCard({ type, link, username }) {
  return (
    <a href={link} target="_blank" className="bento-card bento-card-1x1">
      {/* SVGは後で追加 */}
      <span>{username}</span>
    </a>
  )
}
export default SNSCard