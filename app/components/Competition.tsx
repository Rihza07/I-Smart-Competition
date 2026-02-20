'use client'
import { useState } from "react"

export default function Competition() {
  const slides = [
    { title: "Olimpiade IPA", img: "/image/olimpiade-ipa.jpeg" },
    { title: "Olimpiade IPS", img: "/image/olimpiade-ips.jpeg" },
    { title: "Olimpiade Matematika", img: "/image/olimpiade-mtk.jpeg" },
    { title: "LCT IPA", img: "/image/lct-ipa.jpeg" },
    { title: "LCT IPS", img: "/image/lct-ips.jpeg" },
    { title: "LCT Matematika", img: "/image/lct-mtk.jpeg" },
    { title: "Debat Bahasa Indonesia", img: "/image/debat-indo.jpeg" },
    { title: "Debat Bahasa Inggris", img: "/image/debat-inggris.jpeg" },
    { title: "Vlog 3 Menit", img: "/image/vlog.jpeg" },
    { title: "Story Telling", img: "/image/storytelling.jpeg" },
    { title: "Poster", img: "/image/poster.jpeg" },
    { title: "Song Cover", img: "/image/song-cover.jpeg" },
    { title: "Pidato Bahasa Daerah", img: "/image/pidato-daerah.jpeg" },
    { title: "Menari", img: "/image/menari.jpeg" },
    { title: "Sang Juara", img: "/image/sang-juara.jpeg" },
    { title: "Catur", img: "/image/catur.jpeg" }
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

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
                transform: `translateX(calc(50% - ${current * 320 + 160}px))`
            }}
            >
            {slides.map((slide, index) => (
                <div
                className={`carousel-slide ${
                    index === current ? "active" : ""
                }`}
                key={index}
                >
                <img src={slide.img} alt={slide.title} />
                <h3>{slide.title}</h3>
                </div>
            ))}
            </div>
        </div>

        <button className="nav next" onClick={nextSlide}>
            &#10095;
        </button>
        </div>

      </div>
    </section>
  )
}
