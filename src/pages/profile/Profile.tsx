import './Profile.css';
import profilePic from '../../../public/Untitled.jpg'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact'); // assuming your route path is "/contact"
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank'); // make sure resume is in public folder
  };

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
        <button className="btn primary" onClick={goToContact}>Connect with me</button>
        <button className="btn" onClick={openResume}>My Resume</button>
      </div>
    </section>
  );
}
