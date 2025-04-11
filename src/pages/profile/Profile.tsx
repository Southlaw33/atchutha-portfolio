import './Profile.css';
import profilePic from '../../../public/Untitled.jpg'; // adjust path based on structure

export default function Profile() {
  return (
    <section className="section">
      <img src={profilePic} alt="Profile" />
      <h1>
        Hi, I'm <span className="highlight">Atchutha Rao T A</span>
      </h1>
      <p>
        A full stack AI developer and a Gen AI enthusiast.
      </p>
      <div className="button-group">
        <button className="btn primary">Connect with me</button>
        <button className="btn">My Resume</button>
      </div>
    </section>
  );
}
