import "./WorkExperience.css";
//this is for work exp
export default function WorkExperience() {
  return (
    <section className="work-section">
      <h2>Work Experience</h2>

      <div className="work-card">
        <div className="work-header">
          <h3>Full Stack AI Developer Intern</h3>
          <span className="company-name">@ StackLane by PurpleShorts</span>
        </div>
        <p className="work-date">Feb 2025 - Present</p>
        <ul className="work-responsibilities">
          <li>
            Working with React, Node.js, TypeScript, Hono, Supabase and
            Microsoft Azure.
          </li>
          <li>
            Contributing to design and implementation of Hackernews-server
          </li>
          <li>Working towards implementing an AI project "Second Brain".</li>
        </ul>
      </div>
    </section>
  );
}
