export default function Guidebook() {
  return (
    <section id="guidebook" className="guidebook">
      <div className="container">
        <div className="card">
          <div>
            <h2>Official Guidebook</h2>
            <p>
              Unduh panduan lengkap untuk memahami aturan, persyaratan, di
              I-SMART Competition 2026.
            </p>
          </div>{" "}
          <a
            href="/Juknis.pdf"
            download="juknis I-Smart Competition 2026"
            className="btn"
          >
            Download Guidebook (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
