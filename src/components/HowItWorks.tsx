const steps = [
  {
    num: "01",
    icon: "⌖",
    iconStyle: {},
    title: "Select any text",
    desc: "Highlight anything in any app — a document, email, browser, terminal, PDF. BlindSpot works everywhere macOS does.",
  },
  {
    num: "02",
    icon: "⌘",
    iconStyle: { background: "var(--cyan-dim)", borderColor: "oklch(0.72 0.18 215 / 0.2)" },
    title: "Press ⌘⇧Space",
    desc: "Your configured hotkey fires a request to your chosen AI provider — OpenAI, Anthropic, Gemini, or a local Ollama model.",
  },
  {
    num: "03",
    icon: "◈",
    iconStyle: { background: "rgba(45,213,91,0.1)", borderColor: "rgba(45,213,91,0.2)" },
    title: "Read the answer",
    desc: "A frosted glass overlay streams the response in real time — excluded from screen capture at the compositor level. Not a trick. Gone from recordings.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mobile-section" style={{ padding: "120px 40px", maxWidth: 1200, margin: "0 auto" }}>
      <div className="reveal">
        <div style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "oklch(0.72 0.18 285)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 24, height: 1, background: "oklch(0.72 0.18 285)" }} />
          How it works
        </div>
        <h2 style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text-primary)", marginBottom: 64, maxWidth: 600 }}>
          Three keystrokes<span style={{ color: "var(--text-secondary)", fontWeight: 300 }}> between question and answer.</span>
        </h2>
      </div>

      <div className="reveal how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "var(--border)", borderRadius: 20, overflow: "hidden", transitionDelay: "0.1s" }}>
        {steps.map((s) => (
          <div key={s.num} style={{ background: "var(--bg)", padding: "40px 36px", position: "relative" }}>
            <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, color: "var(--text-tertiary)", letterSpacing: "0.06em", marginBottom: 28 }}>{s.num}</div>
            <div style={{
              width: 48, height: 48,
              background: "var(--accent-dim)",
              border: "1px solid oklch(0.72 0.22 285 / 0.2)",
              borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, marginBottom: 24,
              ...s.iconStyle,
            }}>{s.icon}</div>
            <div style={{ fontFamily: "var(--font-sora)", fontSize: 20, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 12 }}>{s.title}</div>
            <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
