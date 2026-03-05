function AboutCard() {
  return (
    <div className="bento-card card-about about-card">
      <div className="ac-grid"></div>
      <div className="ac-crosshair"></div>
      <div className="ac-top">spec_v1.0 — profile</div>
      <div className="ac-roles">
        <div className="ac-role"><div className="ac-dot"></div><div className="ac-role-text">DJ</div></div>
        <div className="ac-role"><div className="ac-dot"></div><div className="ac-role-text">Developer</div></div>
        <div className="ac-role"><div className="ac-dot"></div><div className="ac-role-text">Designer</div></div>
      </div>
      <div className="ac-bottom">34°N 135°E · Tokyo, JP</div>
    </div>
  )
}

export default AboutCard