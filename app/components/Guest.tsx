export default function Guest() {
  return (
    <section id="Guest" className="guest-star">
      <div className="container">
        <h2 className="font">Guest Star</h2>
        <p className="guest-desc">
          {" "}
          Figur inspiratif yang diharapkan dapat memberikan motivasi dan wawasan
          kepada peserta OS-Cendekia – I-SMART Competition 2026.{" "}
        </p>
        <div className="guest-wrapper">
          <div className="guest-card highlight">
            <center>
              <img
                src="./image/Shakira-Amirah.jpg"
                alt="Shakira Amirah"
                width={200}
                height={200}
              />
            </center>
            <h3>Shakira Amirah</h3>{" "}
            <span>Mahasiswa Kedokteran Universitas Indonesia</span>
            <p>
              {" "}
              Shakira Amirah adalah mahasiswi berprestasi dari Fakultas
              Kedokteran Universitas Indonesia yang dikenal sebagai pemenang
              Clash of Champions 2024. Selain unggul secara akademik dan
              terlibat dalam publikasi ilmiah internasional, ia juga aktif
              sebagai influencer edukasi yang membagikan konten motivasi tentang
              pendidikan, riset medis, dan pengembangan diri bagi pelajar
              Indonesia.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
