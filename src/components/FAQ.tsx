const faqs = [
  {
    q: "What is BlindSpot?",
    a: "BlindSpot is a free, open-source macOS app that delivers AI answers through a floating overlay excluded from screen capture at the OS compositor level. Select any text in any app, press ⌘⇧Space, and the AI response appears in a window that is invisible to every screen recorder, screenshot tool, and screen share — not because of tricks, but because the window is genuinely absent from the frame buffer.",
  },
  {
    q: "How does the overlay stay invisible to screen recorders?",
    a: "BlindSpot sets NSWindowSharingNone on the overlay window at the macOS window server level. This excludes the window from the frame buffer before any recording tool — Zoom, QuickTime, OBS, or any other — can access it. It is not a CSS filter, a transparency trick, or a watermark. The window simply does not exist in what gets captured.",
  },
  {
    q: "Which AI models does BlindSpot support?",
    a: "OpenAI (GPT models), Anthropic (Claude), Google Gemini, xAI Grok, DeepSeek, and local Ollama models. You can switch providers from the menu bar in one click without restarting the app. Ollama and DeepSeek local users need no API key — the model runs entirely on your Mac.",
  },
  {
    q: "Does BlindSpot cost anything?",
    a: "Nothing. BlindSpot is free and open source under the MIT license. The source code is on GitHub. The only costs you might incur are the API fees charged by whichever provider you connect — OpenAI, Anthropic, Gemini, or Grok. Ollama and local DeepSeek models are completely free to run.",
  },
  {
    q: "Does BlindSpot send my API keys to a server?",
    a: "No. API keys are stored at ~/.config/blind-spot/keys/ with Unix file permissions 600. BlindSpot has no cloud sync, no telemetry, and no account requirement. The only outbound requests are the AI queries you trigger, sent directly to the provider you configured.",
  },
  {
    q: "What macOS version does BlindSpot require?",
    a: "macOS 14 Sonoma or later. The binary is universal and runs natively on both Apple Silicon and Intel Macs. Install via Homebrew Cask or download the DMG directly from GitHub.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mobile-section" style={{ padding: "80px 40px 120px", maxWidth: 1200, margin: "0 auto" }}>
      <div className="reveal">
        <div style={{
          fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase",
          letterSpacing: "0.1em", color: "oklch(0.72 0.18 285)", marginBottom: 20,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ display: "block", width: 24, height: 1, background: "oklch(0.72 0.18 285)" }} />
          FAQ
        </div>
        <h2 style={{
          fontFamily: "var(--font-sora)", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 700,
          letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text-primary)",
          marginBottom: 64, maxWidth: 600,
        }}>
          Common<span style={{ color: "var(--text-secondary)", fontWeight: 300 }}> questions.</span>
        </h2>
      </div>

      <div className="reveal" style={{ transitionDelay: "0.1s" }}>
        {faqs.map((item, i) => (
          <div key={i} className="faq-row" style={{
            borderTop: "1px solid var(--border)",
            padding: "32px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 48,
          }}>
            <h3 style={{
              fontFamily: "var(--font-sora)", fontSize: 16, fontWeight: 600,
              letterSpacing: "-0.02em", color: "var(--text-primary)",
              lineHeight: 1.4, margin: 0,
            }}>
              {item.q}
            </h3>
            <p style={{
              fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75,
              fontWeight: 300, margin: 0, fontFamily: "var(--font-dm-sans)",
            }}>
              {item.a}
            </p>
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}
