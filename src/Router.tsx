import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Profile from './pages/profile/Profile';
// import About from './pages/About';
// import WorkExperience from './pages/WorkExperience';
// import Projects from './pages/Projects';
// import Interests from './pages/Interests';
// import Education from './pages/Education';
// import Contact from './pages/Contact';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}
