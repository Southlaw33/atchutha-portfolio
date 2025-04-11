import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import WorkExperience from "./pages/workexperience/WorkExperience";
 import Projects from './pages/projects/Projects';
import Interests from './pages/interests/Interests';
import Education from './pages/education/Education';
import Contact from './pages/contact/Contact';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
