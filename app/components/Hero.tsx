"use client";

export default function Hero() {
  return (
    <section className="hero fade-in">
      <div className="container">
        <h1 className="font">I-SMART Competition 2026</h1>
        <p>
          Ajang kompetisi akademik dan non-akademik terkemuka untuk SMP/MTS
          Se-Derajat
        </p>
        <div className="countdown" id="countdown">
          <div>
            <span id="days">20</span>
            <p>Hari</p>
          </div>
          <div>
            <span id="hours">12</span>
            <p>Jam</p>
          </div>
          <div>
            <span id="minutes">60</span>
            <p>Menit</p>
          </div>
          <div>
            <span id="seconds">30</span>
            <p>Detik</p>
          </div>
        </div>

        <div className="hero-actions">
          <div className="hero-actions">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeV4a82zjUjrbYqi7bYV4HMR2irFUwLoaoCmUbcVwwYoxDLGQ/viewform"
              target="_blank"
              className="btn"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
