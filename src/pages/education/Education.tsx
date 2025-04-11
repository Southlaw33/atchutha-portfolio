import './education.css';

export default function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-timeline">

        <div className="education-card">
          <div className="education-header">
            <h3>B.E in AI & Data Science</h3>
            <span className="education-year">2021 – 2025</span>
          </div>
          <span className="education-institution">Siddaganga Institute of Technology, Tumkur</span>
          <p className="education-score">CGPA: 8.49</p>
        </div>

        <div className="education-card">
          <div className="education-header">
            <h3>2nd PUC</h3>
            <span className="education-year">2021</span>
          </div>
          <span className="education-institution">Vidya Vardhaka Sangha Sardar Patel PU College</span>
          <p className="education-score">Percentage: 92.8%</p>
        </div>

        <div className="education-card">
          <div className="education-header">
            <h3>10th Standard</h3>
            <span className="education-year">2019</span>
          </div>
          <span className="education-institution">Vidya Vardhaka Sangha Sardar Patel High School</span>
          <p className="education-score">Percentage: 94.6%</p>
        </div>

      </div>
    </section>
  );
}
