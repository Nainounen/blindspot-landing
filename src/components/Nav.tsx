"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "60px",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", color: "var(--text-primary)" }}>
        <Image src="/blindspot.svg" alt="BlindSpot" width={28} height={28} style={{ borderRadius: 7 }} />
        <span style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: 15, letterSpacing: "-0.02em" }}>BlindSpot</span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <a
          href="https://github.com/Nainounen/blind-spot"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "var(--text-secondary)", fontSize: 13,
            fontFamily: "var(--font-dm-mono)",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 8, padding: "7px 14px",
            textDecoration: "none",
          }}
        >
          GitHub ↗
        </a>
        <a
          href="https://github.com/Nainounen/blind-spot/releases/latest"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "rgba(255,255,255,0.92)",
            color: "#0a0a0a", fontSize: 13.5, fontWeight: 500,
            border: "none", borderRadius: 10, padding: "9px 20px",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Download
        </a>
      </div>
    </nav>
  );
}
