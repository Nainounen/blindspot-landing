export default function RecorderSection() {
  return (
    <section style={{ padding: "80px 40px 120px", maxWidth: 1200, margin: "0 auto" }}>
      <div className="reveal">
        <div style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "oklch(0.72 0.18 285)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 24, height: 1, background: "oklch(0.72 0.18 285)" }} />
          Screen capture exclusion
        </div>
        <h2 style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text-primary)", marginBottom: 48, maxWidth: 600 }}>
          What they see<span style={{ color: "var(--text-secondary)", fontWeight: 300 }}> vs what you see.</span>
        </h2>
      </div>

      <div className="reveal" style={{
        background: "rgba(15,15,18,0.9)",
        border: "1px solid var(--border)",
        borderRadius: 20, overflow: "hidden",
        boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
        transitionDelay: "0.1s",
      }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <div style={{ flex: 1, textAlign: "center", fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-mono)", marginLeft: -50 }}>Screen Recording Preview</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#ff5f57", fontFamily: "var(--font-dm-mono)" }}>
            <div className="rec-dot" />
            REC
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Left: what recorder sees */}
          <div>
            <p style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>What the recording captures</p>
            <div style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.8, fontFamily: "var(--font-dm-sans)" }}>
              The mitochondria is the powerhouse of the cell. It produces ATP through oxidative phosphorylation, converting{" "}
              <span style={{ background: "oklch(0.72 0.22 285 / 0.2)", borderRadius: 3, color: "oklch(0.85 0.16 285)", padding: "1px 3px" }}>nutrients and oxygen into usable chemical energy</span>{" "}
              that fuels virtually every cellular process.
            </div>
            <div style={{ marginTop: 24, padding: 16, background: "rgba(255,95,87,0.05)", border: "1px solid rgba(255,95,87,0.15)", borderRadius: 10 }}>
              <div style={{ fontSize: 11, color: "rgba(255,95,87,0.7)", fontFamily: "var(--font-dm-mono)", letterSpacing: "0.05em", marginBottom: 6 }}>OVERLAY NOT VISIBLE IN RECORDING</div>
              <div style={{ fontSize: 13, color: "var(--text-tertiary)", lineHeight: 1.6 }}>The BlindSpot overlay is completely absent from the captured frames. Viewers see only the underlying application.</div>
            </div>
          </div>

          {/* Right: what you see */}
          <div>
            <p style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>What you see on screen</p>
            <div style={{ background: "rgba(18,18,22,0.95)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "16px 18px", boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px oklch(0.72 0.22 285 / 0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "oklch(0.82 0.18 285)", fontSize: 13 }}>✦</span>
                <span style={{ fontFamily: "var(--font-sora)", fontSize: 12, fontWeight: 600 }}>BlindSpot</span>
                <div style={{ flex: 1 }} />
                <div style={{ width: 14, height: 14, background: "rgba(255,255,255,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "var(--text-tertiary)" }}>✕</div>
              </div>
              <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Response</div>
              <div style={{ fontSize: 13, color: "var(--text-primary)", lineHeight: 1.75, fontWeight: 300 }}>
                This process is called <strong style={{ color: "oklch(0.82 0.18 285)", fontWeight: 500 }}>oxidative phosphorylation</strong>. The electron transport chain creates a proton gradient across the inner mitochondrial membrane, which drives ATP synthase to produce ATP — the universal energy currency of the cell.
              </div>
            </div>
            <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(45,213,91,0.06)", border: "1px solid rgba(45,213,91,0.15)", borderRadius: 10, fontSize: 12, color: "rgba(45,213,91,0.7)", fontFamily: "var(--font-dm-mono)", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 6, height: 6, background: "#2dd55b", borderRadius: "50%", boxShadow: "0 0 6px #2dd55b", flexShrink: 0 }} />
              Excluded from screen capture at OS compositor level
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
