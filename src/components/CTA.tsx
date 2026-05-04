"use client";
import { useState } from "react";

export default function CTA() {
  const [copied, setCopied] = useState(false);

  function copyBrew() {
    navigator.clipboard.writeText("brew tap Nainounen/blindspot && brew install --cask blindspot").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="download" style={{ padding: "100px 40px 140px", textAlign: "center", position: "relative" }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 400,
        background: "radial-gradient(ellipse, oklch(0.55 0.25 285 / 0.2), transparent 70%)",
        pointerEvents: "none", filter: "blur(40px)",
      }} />

      <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-tertiary)", marginBottom: 28 }}>
          Free & open source · MIT License
        </div>
        <h2 style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--text-primary)", marginBottom: 20 }}>
          Get BlindSpot<br />in 30 seconds.
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", fontWeight: 300, marginBottom: 48, letterSpacing: "-0.01em" }}>
          macOS 14 Sonoma or later · Universal binary (Apple Silicon + Intel)
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <a
            href="https://github.com/Nainounen/blind-spot/releases/latest"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "rgba(255,255,255,0.92)", color: "#0a0a0a",
              fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 500,
              border: "none", borderRadius: 12, padding: "16px 32px",
              textDecoration: "none",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            ↓&nbsp; Download DMG
          </a>

          <button
            onClick={copyBrew}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
              borderRadius: 14, padding: "14px 20px",
              fontFamily: "var(--font-dm-mono)", fontSize: 13, color: "var(--text-secondary)",
              cursor: "pointer", position: "relative",
            }}
          >
            <span style={{ color: "var(--text-tertiary)", fontSize: 11 }}>$</span>
            <span style={{ color: "var(--text-primary)" }}>brew install --cask blindspot</span>
            <span style={{ fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "0.05em" }}>COPY</span>
            {copied && (
              <span style={{
                position: "absolute", top: -32, left: "50%", transform: "translateX(-50%)",
                background: "rgba(45,213,91,0.15)", border: "1px solid rgba(45,213,91,0.3)",
                borderRadius: 6, padding: "4px 12px", fontSize: 11, color: "#2dd55b",
                whiteSpace: "nowrap",
              }}>Copied!</span>
            )}
          </button>
        </div>

        <p style={{ marginTop: 32, fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-sans)" }}>
          First launch only: right-click the app, choose Open, and dismiss the Gatekeeper prompt.
        </p>
      </div>
    </section>
  );
}
