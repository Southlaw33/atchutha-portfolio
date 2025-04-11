import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p className="intro">
        Hey there! I'm a passionate developer who loves exploring the
        intersection of creativity and technology.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>👨‍💻 Full Stack Developer</h3>
          <p>
            I enjoy building robust web applications from the ground up. Whether
            it's crafting beautiful frontends or architecting scalable backends,
            I thrive in turning ideas into interactive experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>🧠 Generative AI Enthusiast</h3>
          <p>
            I'm deeply curious about the future of Generative AI. From large
            language models to image generation, I constantly experiment with
            new tools that push boundaries.
          </p>
        </div>

        <div className="about-card">
          <h3>🎮 Gamer & Creator</h3>
          <p>
            When I'm not coding, I unwind by playing video games, cycling
            through scenic trails, or playing the guitar. These hobbies inspire
            creativity and fuel my passion for tech.
          </p>
        </div>

        <div className="about-card">
          <h3>📌 Club Involvement</h3>
          <p>
            I proudly serve as the <strong>Event Management Lead</strong> at{" "}
            <strong>IEEE SIT SB</strong>, where I plan and execute engaging tech
            events and workshops to foster learning and innovation within our
            college community.
          </p>
        </div>
      </div>
    </section>
  );
}
