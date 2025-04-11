import './contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Let's connect! Whether it’s a collaboration, opportunity, or just a tech chat — I’d love to hear from you.
      </p>

      <div className="contact-container">

        <div className="contact-form">
          <input type="text" placeholder="Your Name" id="name" />
          <input type="email" placeholder="Your Email" id="email" />
          <textarea placeholder="Your Message" id="message" rows={5}></textarea>
          <a
            href="#"
            className="send-mail-btn"
            onClick={(e) => {
              e.preventDefault();
              const name = (document.getElementById('name') as HTMLInputElement).value;
              const email = (document.getElementById('email') as HTMLInputElement).value;
              const message = (document.getElementById('message') as HTMLTextAreaElement).value;
              const mailtoLink = `mailto:your.email@example.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`;
              window.location.href = mailtoLink;
            }}
          >
            Send Message
          </a>
        </div>

        <div className="contact-details">
          <p><strong>Email:</strong>atchutha57@gmail.com</p>
          <p><strong>Location:</strong> Tumkur, India</p>
          <div className="social-links">
            <a href="https://github.com/Southlaw33" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/your-link" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
