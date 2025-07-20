import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isPacked, setIsPacked] = useState(false);

  useEffect(() => {
    const target = new Date("August 14, 2025 00:00:00");

    const tick = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        confetti({ particleCount: 150, spread: 180 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#fff0f5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        📦 Countdown to Indiana! 🛫
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        🎉 <strong>{timeLeft.days}</strong> days, <strong>{timeLeft.hours}</strong>h{" "}
        <strong>{timeLeft.minutes}</strong>m <strong>{timeLeft.seconds}</strong>s left!
      </p>
      <button
        onClick={() => setIsPacked(true)}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          background: "#ff69b4",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 0 10px #ff69b4",
          cursor: "pointer"
        }}
      >
        ✨ I'm packed!
      </button>
      {isPacked && <p style={{ marginTop: "1rem" }}>💼 Let’s gooo!</p>}
     <iframe
  style={{ marginTop: "2rem", borderRadius: "12px" }}
  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4UtSsGT1Sbe?utm_source=generator"
  width="300"
  height="80"
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
