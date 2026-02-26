"use client";
import { useState } from "react";

export default function Competition() {
  const slides = [
    {
      title: "Olimpiade IPA",
      img: "/image/olimpiade-ipa.jpeg",
      description: "Lomba ilmu pengetahuan alam untuk siswa SMA.",
      fee: "Rp40.000,-",
    },
    {
      title: "Olimpiade IPS",
      img: "/image/olimpiade-ips.jpeg",
      description: "Lomba ilmu pengetahuan sosial dengan berbagai tantangan.",
      fee: "Rp40.000,-",
    },
    {
      title: "Olimpiade Matematika",
      img: "/image/olimpiade-mtk.jpeg",
      description: "Mengasah kemampuan logika dan matematika.",
      fee: "Rp40.000,-",
    },
    {
      title: "LCT IPA",
      img: "/image/lct-ipa.jpeg",
      description: "Lomba Cepat Tepat IPA tingkat SMA.",
      fee: "Rp70.000,-",
    },
    {
      title: "LCT IPS",
      img: "/image/lct-ips.jpeg",
      description: "Lomba Cepat Tepat IPS dengan soal menarik.",
      fee: "Rp70.000,-",
    },
    {
      title: "LCT Matematika",
      img: "/image/lct-mtk.jpeg",
      description: "Tes cepat dalam memecahkan soal matematika.",
      fee: "Rp70.000,-",
    },
    {
      title: "Debat Bahasa Indonesia",
      img: "/image/debat-indo.jpeg",
      description: "Debat formal menggunakan bahasa Indonesia.",
      fee: "Rp75.000,-",
    },
    {
      title: "Debat Bahasa Inggris",
      img: "/image/debat-inggris.jpeg",
      description: "Tantang kemampuan bahasa Inggrismu dalam debat.",
      fee: "Rp75.000,-",
    },
    {
      title: "Vlog 3 Menit",
      img: "/image/vlog.jpeg",
      description: "Buat video vlog kreatif berdurasi 3 menit.",
      fee: "Rp50.000,-",
    },
    {
      title: "Story Telling",
      img: "/image/storytelling.jpeg",
      description: "Tampilkan kemampuan bercerita secara menarik.",
      fee: "Rp45.000,-",
    },
    {
      title: "Poster",
      img: "/image/poster.jpeg",
      description: "Desain poster kreatif sesuai tema lomba.",
      fee: "Rp40.000,-",
    },
    {
      title: "Song Cover",
      img: "/image/song-cover.jpeg",
      description: "Nyanyikan lagu favoritmu dalam kompetisi ini.",
      fee: "Rp40.000,-",
    },
    {
      title: "Pidato Bahasa Daerah",
      img: "/image/pidato-daerah.jpeg",
      description: "Tunjukkan kemampuan pidato dalam bahasa daerah.",
      fee: "Rp25.000,-",
    },
    {
      title: "Menari",
      img: "/image/menari.jpeg",
      description: "Lomba tari solo atau kelompok dengan kreativitas tinggi.",
      fee: "Rp50.000,-",
    },
    {
      title: "Sang Juara",
      img: "/image/sang-juara.jpeg",
      description: "Ajang penghargaan bagi peserta berprestasi.",
      fee: "Rp35.000,-",
    },
    {
      title: "Catur",
      img: "/image/catur.jpeg",
      description: "Tantang kemampuan strategi catur-mu.",
      fee: "Rp35.000,-",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="competition" className="competition">
      <div className="container">
        <h2 className="font">Cabang Lomba</h2>

        <div className="slider-3d">
          <button className="nav prev" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(calc(50% - ${current * 320 + 160}px))`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  className={`carousel-slide ${index === current ? "active" : ""}`}
                  key={index}
                >
                  <img src={slide.img} alt={slide.title} />

                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                  <p className="slide-fee">Biaya Pendaftaran: {slide.fee}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="nav next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      <style jsx>{`
        .slide-title {
          font-size: 1.3rem;
          font-weight: 700; /* tebal */
          margin-top: 10px;
        }
        .slide-description {
          font-size: 1rem;
          font-weight: 400; /* normal */
          color: #666;
          margin: 5px 0;
        }
        .slide-fee {
          font-size: 1.1rem;
          font-weight: 600; /* semi-bold */
          color: #7223c0; /* biru menonjol */
        }

        /* opsional: untuk memperhalus carousel slide */
        .carousel-slide img {
          width: 100%;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}
