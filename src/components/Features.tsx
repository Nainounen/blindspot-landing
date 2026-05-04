export default function Features() {
  return (
    <section id="features" className="mobile-section" style={{ padding: "80px 40px 120px", maxWidth: 1200, margin: "0 auto" }}>
      <div className="reveal">
        <div style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "oklch(0.72 0.18 285)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 24, height: 1, background: "oklch(0.72 0.18 285)" }} />
          Features
        </div>
        <h2 style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text-primary)", marginBottom: 64, maxWidth: 600 }}>
          Built for<span style={{ color: "var(--text-secondary)", fontWeight: 300 }}> power users.</span>
        </h2>
      </div>

      <div className="reveal features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2, background: "var(--border)", borderRadius: 20, overflow: "hidden", transitionDelay: "0.1s" }}>

        {/* Row 1 */}
        <div style={{ gridColumn: "span 7", background: "var(--bg)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ width: 40, height: 40, background: "var(--accent-dim)", border: "1px solid oklch(0.72 0.22 285 / 0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20 }}>◎</div>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10 }}>Invisible at the compositor</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
            The overlay window uses <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>NSWindowSharingNone</strong> — excluded from screen capture at the macOS window server level before any recording tool can see it. Not CSS tricks. Not a watermark. Truly absent from the frame buffer.
          </div>
        </div>

        <div style={{ gridColumn: "span 5", background: "var(--bg)", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ width: 40, height: 40, background: "var(--cyan-dim)", border: "1px solid oklch(0.72 0.18 215 / 0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20 }}>⟳</div>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10 }}>Any AI, any model</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>Switch providers from the menu bar in one click. No restart required.</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
            {[
              { label: "OpenAI", dotClass: "#10a37f" },
              { label: "Anthropic", dotClass: "#c97b4b" },
              { label: "Gemini", dotClass: "#4285f4" },
              { label: "Ollama", dotClass: "#a0a0a0" },
            ].map(({ label, dotClass }) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: 100, padding: "6px 14px", fontSize: 12.5, color: "var(--text-secondary)", fontFamily: "var(--font-dm-sans)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: dotClass, boxShadow: `0 0 6px ${dotClass}`, flexShrink: 0 }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ gridColumn: "span 4", background: "var(--bg)", padding: "36px 32px" }}>
          <div style={{ width: 40, height: 40, background: "rgba(45,213,91,0.1)", border: "1px solid rgba(45,213,91,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20 }}>⬡</div>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10 }}>Works in every app</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
            Reads selections via the <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>macOS Accessibility API</strong>, bypassing JavaScript copy handlers entirely. Chromium, Safari, terminal, native apps — all supported.
          </div>
        </div>

        <div id="privacy" style={{ gridColumn: "span 4", background: "var(--bg)", padding: "36px 32px" }}>
          <div style={{ width: 40, height: 40, background: "rgba(255,179,60,0.1)", border: "1px solid rgba(255,179,60,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20 }}>⬡</div>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10 }}>Keys never leave your Mac</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
            API keys are stored at <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>~/.config/blind-spot/keys/</strong> with mode 600. No cloud sync, no telemetry, no account needed.
          </div>
          <div style={{ marginTop: 20 }}>
            {["openai", "anthropic", "gemini"].map((k) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 8, fontSize: 12, fontFamily: "var(--font-dm-mono)", color: "var(--text-tertiary)", border: "1px solid transparent" }}>
                <span>🔑</span>
                <span style={{ flex: 1 }}>~/.config/blind-spot/keys/{k}</span>
                <span style={{ fontSize: 10, background: "rgba(45,213,91,0.1)", color: "#2dd55b", border: "1px solid rgba(45,213,91,0.2)", borderRadius: 4, padding: "1px 7px" }}>600</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ gridColumn: "span 4", background: "var(--bg)", padding: "36px 32px" }}>
          <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20 }}>⟡</div>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10 }}>System prompts</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
            Assign the AI a fixed role or custom context. Drop a <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>.txt</strong> file in the prompts folder and pass its name at launch.
          </div>
          <div style={{ marginTop: 20, background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px", fontFamily: "var(--font-dm-mono)", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--text-tertiary)" }}># ~/.config/blind-spot/prompts/</span><br />
            cp prompts/<span style={{ color: "oklch(0.75 0.15 150)" }}>example.txt</span> \<br />
            &nbsp;&nbsp;~/.config/.../my-prompt.txt<br /><br />
            ./run.sh <span style={{ color: "oklch(0.72 0.22 285)" }}>my-prompt</span>
          </div>
        </div>

        {/* Row 3 */}
        <div style={{ gridColumn: "span 6", background: "var(--bg)", padding: "36px 32px" }}>
          <div style={{ width: 40, height: 40, background: "rgba(255,179,60,0.1)", border: "1px solid rgba(255,179,60,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20 }}>◈</div>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10 }}>One-line install</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>Install via Homebrew Cask — no Gatekeeper warnings, no drag-to-Applications dance.</div>
          <div style={{ marginTop: 20, background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 16px", fontFamily: "var(--font-dm-mono)", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.8 }}>
            <span style={{ color: "var(--text-tertiary)" }}># Install with Homebrew</span><br />
            brew tap <span style={{ color: "oklch(0.72 0.22 285)" }}>Nainounen/blindspot</span><br />
            brew install --cask <span style={{ color: "oklch(0.75 0.15 150)" }}>blindspot</span>
          </div>
        </div>

        <div style={{ gridColumn: "span 6", background: "var(--bg)", padding: "36px 32px" }}>
          <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 20 }}>✦</div>
          <div style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 10 }}>Lives in your menu bar</div>
          <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
            Runs as a background accessory with <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>no Dock icon</strong>. The ✦ icon in the menu bar gives you instant access to settings and provider switching. Zero friction.
          </div>
        </div>

      </div>
    </section>
  );
}
