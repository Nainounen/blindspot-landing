import Image from "next/image";

const providers = [
  { name: "OpenAI",      logo: "/providers/openai.svg",      model: "GPT-4o",           vision: true,  free: false },
  { name: "Anthropic",   logo: "/providers/claude.svg",      model: "Claude Sonnet",    vision: true,  free: false },
  { name: "Gemini",      logo: "/providers/googlegemini.svg",model: "Gemini 2.5 Flash", vision: true,  free: true  },
  { name: "DeepSeek",    logo: "/providers/deepseek.svg",    model: "V4 Flash",         vision: false, free: true  },
  { name: "Grok",        logo: "/providers/grok.svg",        model: "Grok 3",           vision: true,  free: false },
  { name: "OpenRouter",  logo: "/providers/openrouter.svg",  model: "100+ models",      vision: true,  free: false },
  { name: "Ollama",      logo: "/providers/ollama.svg",      model: "Local models",     vision: false, free: true  },
];

const features = [
  { title: "Invisible overlay",       desc: "Excluded from every screen recorder, screenshot, and video call via NSWindowSharingNone — not a trick, absent from the frame buffer." },
  { title: "Visual context",          desc: "Press ⌘⇧⌥Space to capture a screenshot around your selection and send it to the AI. Useful for UI, diagrams, tables, and code layout." },
  { title: "AI profiles",             desc: "Create multiple profiles each with their own provider, model, system prompt, temperature, and token limit. Switch from the menu bar." },
  { title: "Conversation history",    desc: "Every exchange is saved, searchable, and grouped by date. Organise into folders. Export any conversation as Markdown or JSON." },
  { title: "Works in every app",      desc: "Reads selected text via the macOS Accessibility API — bypasses JavaScript copy handlers. Works in browsers, terminals, native apps, PDFs." },
  { title: "Keys stay on your Mac",   desc: "API keys stored at ~/.config/blind-spot/keys/ with mode 0600. No cloud sync, no telemetry, no account required." },
  { title: "Auto-updates",            desc: "Sparkle checks for updates in the background. No manual downloads." },
  { title: "Configurable hotkeys",    desc: "All shortcuts are rebindable in Settings. Default is ⌘⇧Space, but any combination works." },
];

const check = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="oklch(0.72 0.22 285)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const dash = (
  <span style={{ color: "var(--text-tertiary)", fontSize: 14, lineHeight: 1 }}>—</span>
);

export default function InfoSection() {
  return (
    <section style={{ padding: "80px 40px 100px", maxWidth: 1200, margin: "0 auto" }}>

      {/* Providers */}
      <div className="reveal" style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "oklch(0.72 0.18 285)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 24, height: 1, background: "oklch(0.72 0.18 285)" }} />
          AI providers
        </div>
        <h2 style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text-primary)", marginBottom: 36 }}>
          Seven providers.<span style={{ color: "var(--text-secondary)", fontWeight: 300 }}> One hotkey.</span>
        </h2>

        <div style={{ border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 80px 80px", padding: "10px 24px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid var(--border)" }}>
            {["Provider", "Default model", "Vision", "Free"].map(h => (
              <div key={h} style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-tertiary)" }}>{h}</div>
            ))}
          </div>

          {providers.map((p, i) => (
            <div key={p.name} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 80px 80px",
              padding: "14px 24px", alignItems: "center",
              borderBottom: i < providers.length - 1 ? "1px solid var(--border)" : "none",
              background: "var(--bg)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Image src={p.logo} alt={p.name} width={20} height={20} style={{ objectFit: "contain", filter: "brightness(0.8)" }} />
                </div>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>{p.name}</span>
              </div>
              <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: 12, color: "var(--text-secondary)" }}>{p.model}</div>
              <div>{p.vision ? check : dash}</div>
              <div>{p.free ? check : dash}</div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 14, fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-mono)" }}>
          Free = no API key required (Gemini free tier / DeepSeek free tier / Ollama runs locally)
        </p>
      </div>

      {/* Features */}
      <div className="reveal" style={{ transitionDelay: "0.1s" }}>
        <div style={{ fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.1em", color: "oklch(0.72 0.18 285)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "block", width: 24, height: 1, background: "oklch(0.72 0.18 285)" }} />
          Features
        </div>
        <h2 style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text-primary)", marginBottom: 36 }}>
          Everything you need.<span style={{ color: "var(--text-secondary)", fontWeight: 300 }}> Nothing you don&apos;t.</span>
        </h2>

        <div style={{ border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
          {features.map((f, i) => (
            <div key={f.title} style={{
              display: "grid", gridTemplateColumns: "220px 1fr",
              padding: "18px 24px", alignItems: "start",
              borderBottom: i < features.length - 1 ? "1px solid var(--border)" : "none",
              gap: 24,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flexShrink: 0, marginTop: 1 }}>{check}</div>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>{f.title}</span>
              </div>
              <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
