"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const targetDate = new Date("2026-04-11T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="hero fade-in">
      <div className="container">
        <h1 className="font">I-SMART Competition 2026</h1>
        <p>
          Ajang kompetisi akademik dan non-akademik terkemuka untuk SMP/MTS
          Se-Derajat
        </p>

        <div className="countdown">
          <div>
            <span>{timeLeft.days}</span>
            <p>Hari</p>
          </div>
          <div>
            <span>{timeLeft.hours}</span>
            <p>Jam</p>
          </div>
          <div>
            <span>{timeLeft.minutes}</span>
            <p>Menit</p>
          </div>
          <div>
            <span>{timeLeft.seconds}</span>
            <p>Detik</p>
          </div>
        </div>

        <div className="hero-actions">
          <Link href="/register" className="btn">
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
