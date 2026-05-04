"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="nav-inner"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "64px",
        background: scrolled ? "rgba(8,8,8,0.9)" : "rgba(8,8,8,0.7)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--text-primary)" }}>
        <div style={{
          width: 28, height: 28,
          background: "linear-gradient(135deg, oklch(0.72 0.22 285), oklch(0.62 0.28 310))",
          borderRadius: 7,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14,
          boxShadow: "0 0 20px oklch(0.72 0.22 285 / 0.4)",
        }}>✦</div>
        <span style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: 15, letterSpacing: "-0.02em" }}>BlindSpot</span>
      </a>

      <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none" }} className="nav-links-desktop">
        <li><a href="#how" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 400, letterSpacing: "-0.01em" }}>How it works</a></li>
        <li><a href="#features" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Features</a></li>
        <li><a href="#privacy" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14 }}>Privacy</a></li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <a
          href="https://github.com/Nainounen/blind-spot"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
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
          href="#download"
          className="nav-download"
          style={{
            background: "linear-gradient(135deg, oklch(0.72 0.22 285), oklch(0.58 0.28 310))",
            color: "white", fontSize: 13.5, fontWeight: 500,
            border: "none", borderRadius: 10, padding: "9px 20px",
            textDecoration: "none",
            boxShadow: "0 0 24px oklch(0.72 0.22 285 / 0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            letterSpacing: "-0.01em",
          }}
        >
          Download free
        </a>
      </div>
    </nav>
  );
}
