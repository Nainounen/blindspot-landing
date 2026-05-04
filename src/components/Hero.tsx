export default function Hero() {
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "80px 40px 100px",
      overflow: "hidden",
    }}>
      {/* Ribbon background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {[
          { h: 220, top: -40, dy: -20, grad: "linear-gradient(90deg,transparent 0%,oklch(0.28 0.22 285 / 0.6) 15%,oklch(0.52 0.28 285 / 0.9) 35%,oklch(0.68 0.26 290 / 1) 50%,oklch(0.52 0.28 285 / 0.9) 65%,oklch(0.28 0.22 285 / 0.6) 85%,transparent 100%)", blur: 2 },
          { h: 180, top: 100, dy: 10, grad: "linear-gradient(90deg,transparent 0%,oklch(0.20 0.20 300 / 0.4) 10%,oklch(0.42 0.26 295 / 0.85) 30%,oklch(0.60 0.24 288 / 0.95) 50%,oklch(0.42 0.26 295 / 0.85) 70%,oklch(0.20 0.20 300 / 0.4) 90%,transparent 100%)", blur: 1 },
          { h: 260, top: 200, dy: 40, grad: "linear-gradient(90deg,transparent 0%,oklch(0.18 0.18 275 / 0.3) 8%,oklch(0.35 0.24 282 / 0.7) 28%,oklch(0.55 0.28 285 / 0.9) 48%,oklch(0.35 0.24 282 / 0.7) 68%,oklch(0.18 0.18 275 / 0.3) 88%,transparent 100%)", blur: 3 },
          { h: 150, top: 340, dy: 20, grad: "linear-gradient(90deg,transparent 5%,oklch(0.22 0.20 280 / 0.5) 20%,oklch(0.45 0.26 283 / 0.8) 42%,oklch(0.58 0.24 287 / 0.85) 55%,oklch(0.45 0.26 283 / 0.8) 68%,oklch(0.22 0.20 280 / 0.5) 82%,transparent 95%)", blur: 1.5 },
          { h: 200, top: 440, dy: 0, grad: "linear-gradient(90deg,transparent 0%,oklch(0.16 0.16 275 / 0.25) 12%,oklch(0.32 0.22 280 / 0.6) 30%,oklch(0.50 0.26 285 / 0.75) 50%,oklch(0.32 0.22 280 / 0.6) 70%,oklch(0.16 0.16 275 / 0.25) 88%,transparent 100%)", blur: 4 },
        ].map((r, i) => (
          <div key={i} style={{
            position: "absolute",
            left: "-20%", width: "140%",
            borderRadius: 28,
            height: r.h,
            top: r.top,
            transform: `rotate(-28deg) translateY(${r.dy}px)`,
            background: r.grad,
            filter: `blur(${r.blur}px)`,
          }} />
        ))}
      </div>

      {/* Vignettes */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(8,8,8,0.85) 100%)", zIndex: 1, pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 className="hero-animate" style={{
          fontFamily: "var(--font-sora)",
          fontSize: "clamp(52px, 9vw, 112px)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          marginBottom: 24,
          color: "var(--text-primary)",
        }}>
          AI answers.<br />Invisible.
        </h1>

        <p className="hero-animate-2" style={{
          fontSize: "clamp(15px, 1.6vw, 18px)",
          color: "rgba(255,255,255,0.55)",
          fontWeight: 300,
          letterSpacing: "-0.01em",
          maxWidth: 460,
          lineHeight: 1.65,
          marginBottom: 48,
        }}>
          Select text in any macOS app. Press ⌘⇧Space. Get an AI answer from OpenAI, Anthropic, Gemini, or local Ollama in a floating overlay that no screen recorder can capture.
        </p>

        <div className="hero-animate-3" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="https://github.com/Nainounen/blind-spot/releases/latest"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 9,
              background: "rgba(255,255,255,0.92)",
              color: "#0a0a0a",
              fontFamily: "var(--font-dm-sans)",
              fontSize: 14.5, fontWeight: 500,
              border: "none", borderRadius: 12,
              padding: "13px 24px",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontSize: 15, opacity: 0.8 }}></span>
            Download for Mac
          </a>
          <a
            href="https://github.com/Nainounen/blind-spot"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 9,
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-dm-sans)",
              fontSize: 14.5, fontWeight: 400,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 12, padding: "13px 24px",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            View on GitHub ↗
          </a>
        </div>

        <div className="hero-animate-4" style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.28)",
          fontFamily: "var(--font-dm-mono)",
          display: "flex", alignItems: "center", gap: 12,
          letterSpacing: "0.01em",
        }}>
          <span>v1.0 · macOS 14+</span>
          <span style={{ color: "rgba(255,255,255,0.12)" }}>|</span>
          <span>Universal binary</span>
          <span style={{ color: "rgba(255,255,255,0.12)" }}>|</span>
          <span>Install via homebrew</span>
        </div>

        <div className="hero-animate-5" style={{ marginTop: 56 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 0,
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 100, overflow: "hidden",
            fontSize: 13, cursor: "pointer",
          }}>
            <span style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontWeight: 500, padding: "7px 14px", fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.01em" }}>✦ Now with Ollama support</span>
            <span style={{ color: "rgba(255,255,255,0.45)", padding: "7px 14px", fontFamily: "var(--font-dm-sans)", display: "flex", alignItems: "center", gap: 6, letterSpacing: "-0.01em" }}>Run locally, zero API cost →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
