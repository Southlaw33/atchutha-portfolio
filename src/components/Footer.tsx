import "./Footer.css";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <div className="socials">
        <a href="mailto:atchutha57@gmail.com" aria-label="Email">
          <Mail size={24} />
        </a>
        <a href="tel:916361351891" aria-label="Phone">
          <Phone size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/atchutha-rao-t-a-50241a24b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/Southlaw33"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
      </div>
    </footer>
  );
}
