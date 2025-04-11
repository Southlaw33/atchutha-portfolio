import './Project.css';

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">

        <div className="project-card">
          <h3>📡 Hackernews-server</h3>
          <p>
            A PostgreSQL based Hono project that mirrors the functionality(Backend) of Hacker News.
          </p>
          <a
            href="https://github.com/Southlaw33/hackernews-server"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>🧪 Toxic-text-classifier</h3>
          <p>
            A machine learning model that detects toxicity in text/comments using NLP techniques.
          </p>
          <a
            href="https://github.com/Southlaw33/Toxic-text-classifier"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
