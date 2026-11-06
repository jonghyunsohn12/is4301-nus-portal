import nusLogo from '../public/nus-logo.png'

function Home() {
  return (
    <section className="home-page" aria-labelledby="home-heading">
      <div className="hero-copy">
        <p className="eyebrow">National University of Singapore</p>
        <h1 id="home-heading">NUS is a leading research university in Asia</h1>
        <p className="hero-description">
          Discover the modules taught at NUS and learn about the university's
          admission process.
        </p>
      </div>

      <div className="logo-panel">
        <img src={nusLogo} alt="NUS logo" className="nus-logo" />
      </div>

      <div className="quick-links" aria-label="Explore the portal">
        <article className="quick-link-card">
          <span className="card-number">01</span>
          <div>
            <h2>Academics</h2>
            <p>Browse the Business Analytics modules taught at NUS.</p>
          </div>
        </article>

        <article className="quick-link-card">
          <span className="card-number">02</span>
          <div>
            <h2>Admission</h2>
            <p>Follow the five steps in the university admission process.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Home
