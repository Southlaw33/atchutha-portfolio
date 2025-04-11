import './Interests.css';

export default function Interests() {
  return (
    <section className="interests-section">
      <h2>Interests</h2>
      <div className="interests-grid">

        <div className="interest-card">
          <h3>🧠 Generative AI</h3>
          <p>
            Fascinated by how machines can generate human-like content. I regularly explore LLMs, diffusion models, and prompt engineering.
          </p>
        </div>

        <div className="interest-card">
          <h3>🌐 Web Development</h3>
          <p>
            I love building sleek, responsive user interfaces and scalable backend systems. Full stack magic is my thing.
          </p>
        </div>

        <div className="interest-card">
          <h3>🎮 Video Games</h3>
          <p>
            Gaming is more than fun—it's a way I connect with creativity, storytelling, and strategic thinking. Always up for a good co-op!
          </p>
        </div>

      </div>
    </section>
  );
}
