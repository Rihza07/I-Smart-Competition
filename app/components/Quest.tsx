"use client";
import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Siapa saja yang dapat mengikuti OS-Cendekia – I-SMART Competition 2026?",
      answer:
        "Kompetisi ini terbuka untuk pelajar SMP, SMA/SMK, serta mahasiswa dari seluruh Indonesia sesuai dengan ketentuan masing-masing cabang lomba.",
    },
    {
      question: "Bagaimana cara melakukan pendaftaran?",
      answer:
        "Pendaftaran dilakukan secara daring melalui website resmi OS-Cendekia dengan mengisi formulir pendaftaran dan mengunggah berkas yang diperlukan.",
    },
    {
      question: "Apakah terdapat biaya pendaftaran?",
      answer:
        "Informasi mengenai biaya pendaftaran akan disampaikan secara resmi pada guidebook dan kanal komunikasi panitia.",
    },
    {
      question: "Di mana saya bisa mengunduh guidebook lomba?",
      answer:
        "Guidebook dapat diunduh melalui halaman resmi website OS-Cendekia – I-SMART Competition 2026.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="font">Frequently Asked Questions</h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="icon" />
            </button>

            <div className="faq-answer">
              <div className="faq-answer-content">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
