import Image from "next/image";

export default function Hero({ version }: { version: string }) {
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
      {/* Subtle radial glow */}
      <div style={{
        position: "absolute",
        top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 500,
        background: "radial-gradient(ellipse, oklch(0.55 0.25 285 / 0.18), transparent 70%)",
        pointerEvents: "none",
        filter: "blur(40px)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="hero-animate" style={{ marginBottom: 32 }}>
          <Image src="/blindspot.svg" alt="BlindSpot" width={64} height={64} style={{ borderRadius: 16 }} />
        </div>

        <h1 className="hero-animate" style={{
          fontFamily: "var(--font-sora)",
          fontSize: "clamp(48px, 8vw, 96px)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          marginBottom: 24,
          color: "var(--text-primary)",
        }}>
          AI answers.<br />Invisible.
        </h1>

        <p className="hero-animate-2" style={{
          fontSize: "clamp(15px, 1.6vw, 17px)",
          color: "rgba(255,255,255,0.5)",
          fontWeight: 300,
          letterSpacing: "-0.01em",
          maxWidth: 440,
          lineHeight: 1.7,
          marginBottom: 40,
        }}>
          Select text in any macOS app. Press <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>⌘⇧Space</strong>. Get an AI answer in a floating overlay that no screen recorder can capture.
        </p>

        <div className="hero-animate-3" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="https://github.com/Nainounen/blind-spot/releases/latest"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.92)",
              color: "#0a0a0a",
              fontFamily: "var(--font-dm-sans)",
              fontSize: 14.5, fontWeight: 500,
              border: "none", borderRadius: 12,
              padding: "13px 24px",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            ↓ Download for Mac
          </a>
          <a
            href="https://github.com/Nainounen/blind-spot"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-dm-sans)",
              fontSize: 14.5, fontWeight: 400,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12, padding: "13px 24px",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            View on GitHub ↗
          </a>
        </div>

        <div className="hero-animate-4 hero-meta" style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.25)",
          fontFamily: "var(--font-dm-mono)",
          display: "flex", alignItems: "center", gap: 12,
          letterSpacing: "0.01em",
        }}>
          <span>v{version} · macOS 26+</span>
          <span style={{ color: "rgba(255,255,255,0.1)" }}>|</span>
          <span>Universal binary</span>
          <span style={{ color: "rgba(255,255,255,0.1)" }}>|</span>
          <span>Free & open source</span>
        </div>
      </div>
    </section>
  );
}
