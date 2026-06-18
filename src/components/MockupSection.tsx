"use client";
import { useEffect, useRef, useState } from "react";

const responses = [
  "This process is called **oxidative phosphorylation**. The electron transport chain creates a proton gradient across the inner mitochondrial membrane, which drives ATP synthase — producing ATP from ADP and inorganic phosphate.",
  "A **closure** captures variables from its enclosing scope and keeps them alive even after that scope has exited. In JavaScript, every function forms a closure over the variables in the scope where it was defined.",
];

function renderBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ color: "oklch(0.85 0.16 285)", fontWeight: 500 }}>{part}</strong>
    ) : (
      part
    )
  );
}

export default function MockupSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [responseIdx, setResponseIdx] = useState(0);
  const [typing, setTyping] = useState(false);
  const [dotVisible, setDotVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let charIdx = 0;
    let currentResponseIdx = 0;
    let cancelled = false;

    function typeChar() {
      if (cancelled) return;
      const full = responses[currentResponseIdx];
      if (charIdx <= full.length) {
        setDisplayedText(full.slice(0, charIdx));
        charIdx++;
        timerRef.current = setTimeout(typeChar, charIdx < 20 ? 60 : 22 + Math.random() * 18);
      } else {
        setDotVisible(false);
        timerRef.current = setTimeout(() => {
          if (cancelled) return;
          setDotVisible(true);
          charIdx = 0;
          currentResponseIdx = (currentResponseIdx + 1) % responses.length;
          setResponseIdx(currentResponseIdx);
          setDisplayedText("");
          timerRef.current = setTimeout(typeChar, 400);
        }, 3800);
      }
    }

    timerRef.current = setTimeout(typeChar, 1200);
    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const full = responses[responseIdx];
  const isFinished = displayedText === full;

  return (
    <section style={{ padding: "80px 40px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
      <div style={{
        fontSize: 11, fontFamily: "var(--font-dm-mono)", textTransform: "uppercase",
        letterSpacing: "0.1em", color: "var(--text-tertiary)", marginBottom: 56,
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <span style={{ display: "block", width: 40, height: 1, background: "var(--border)" }} />
        Live overlay demo
        <span style={{ display: "block", width: 40, height: 1, background: "var(--border)" }} />
      </div>

      <div className="reveal" style={{ position: "relative", width: "100%", maxWidth: 640 }}>
        <div style={{ position: "relative" }}>
          {/* Hotkey hint */}
          <div className="hotkey-animate" style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            position: "absolute", top: -40, left: "50%",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid var(--border)",
            borderRadius: 8, padding: "6px 12px",
            fontSize: 12, color: "var(--text-secondary)",
            fontFamily: "var(--font-dm-mono)",
            whiteSpace: "nowrap",
          }}>
            Press{" "}
            {["⌘", "⇧", "Space"].map((k) => (
              <span key={k} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4, padding: "1px 6px", fontSize: 11, color: "var(--text-primary)" }}>{k}</span>
            ))}{" "}
            over selected text
          </div>

          {/* Context text */}
          <div style={{
            background: "rgba(20,20,20,0.9)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "12px 12px 0 0", padding: "20px 24px",
            fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7,
            textAlign: "left", fontFamily: "var(--font-dm-sans)",
          }}>
            The mitochondria is the powerhouse of the cell. It produces ATP through oxidative phosphorylation, converting{" "}
            <span style={{ background: "var(--accent-dim)", borderRadius: 3, color: "var(--text-primary)", padding: "1px 3px" }}>
              nutrients and oxygen into usable chemical energy that fuels virtually every cellular process
            </span>
            . Without it, complex life would be impossible.
          </div>

          {/* Overlay window */}
          <div style={{
            background: "rgba(18,18,22,0.95)", border: "1px solid rgba(255,255,255,0.12)",
            borderTop: "none", borderRadius: "0 0 16px 16px",
            padding: "20px 22px", textAlign: "left",
            boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 60px oklch(0.72 0.22 285 / 0.1)",
            backdropFilter: "blur(40px) saturate(180%)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 285 / 0.4), transparent)" }} />

            {/* Title bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, fontFamily: "var(--font-sora)", color: "var(--text-primary)" }}>
                <span style={{ color: "oklch(0.82 0.18 285)", fontSize: 14 }}>✦</span> BlindSpot
              </div>
              <div style={{ width: 16, height: 16, background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "var(--text-tertiary)", cursor: "pointer" }}>✕</div>
            </div>

            {/* Query */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 14px", marginBottom: 14, fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>
              <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Selected text</div>
              nutrients and oxygen into usable chemical energy that fuels virtually every cellular process
            </div>

            {/* Response */}
            <div>
              <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-mono)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                <div className="response-dot" style={{ opacity: dotVisible ? 1 : 0 }} />
                Response
              </div>
              <div style={{ fontSize: 13.5, color: "var(--text-primary)", lineHeight: 1.75, fontFamily: "var(--font-dm-sans)", fontWeight: 300, minHeight: 80 }}>
                {renderBold(displayedText)}
                {!isFinished && <span className="cursor" />}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
