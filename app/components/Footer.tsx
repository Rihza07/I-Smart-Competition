export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <h3 className="logo">I-SMART</h3>
          <p>
            Empowering the next generation through innovation, competition,
            and technology-driven excellence.
          </p>

          <div className="footer-socials">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
\
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#competition">Competition</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Guidebook</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <ul>
            <li>Email: info@ismart.id</li>
            <li>Phone: +62 812 3456 7890</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 I-SMART. All Rights Reserved.</p>
      </div>
    </footer>

  )
}
