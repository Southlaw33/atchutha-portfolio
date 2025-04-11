import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p className="intro">
        Hey there! I'm a passionate developer who loves exploring the intersection of creativity and technology.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>👨‍💻 Full Stack Developer</h3>
          <p>
            I enjoy building robust web applications from the ground up. Whether it's crafting beautiful frontends or architecting scalable backends, I thrive in turning ideas into interactive experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>🧠 Generative AI Enthusiast</h3>
          <p>
            I'm deeply curious about the future of Generative AI. From large language models to diffusion-based image generation, I'm always experimenting with new tools and frameworks that push the boundaries of what's possible.
          </p>
        </div>

        <div className="about-card">
          <h3>🎮 Gamer & Creator</h3>
          <p>
            In my downtime, you'll find me diving into immersive video games, strumming chords on my guitar, or cycling through scenic routes. These hobbies fuel my creativity and keep my problem-solving instincts sharp.
          </p>
        </div>
      </div>
    </section>
  );
}
