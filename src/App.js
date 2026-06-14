import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">MyPortfolio</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Halo, Saya <span className="highlight">Naufal Daib Rizal</span> 👋</h1>
          <p>Web Developer | Videographer | Photographer</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Hubungi Saya</a>
            <a href="#skills" className="btn btn-outline">Lihat Skills</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="about-card">
          <p>Saya adalah seorang mahasiswa teknik informatika</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {['React', 'JavaScript', 'HTML & CSS', 'Node.js', 'Git', 'Vercel'].map((skill) => (
            <div className="skill-card" key={skill}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Kontak</h2>
        <div className="contact-card">
          <p>📧 naufal@gmail.com</p>
          <p>💼 linkedin.com/in/naufal</p>
          <p>🐙 github.com/naufal daib rizal</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Naufal Daib Rizal.</p>
      </footer>
    </div>
  );
}

export default App;