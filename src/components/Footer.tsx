const links = [
  { label: "GitHub", href: "https://github.com/Nainounen/blind-spot" },
  { label: "Releases", href: "https://github.com/Nainounen/blind-spot/releases" },
  { label: "Docs", href: "https://github.com/Nainounen/blind-spot/blob/main/README.md" },
  { label: "MIT License", href: "https://github.com/Nainounen/blind-spot/blob/main/LICENSE" },
];

export default function Footer() {
  return (
    <footer className="footer-inner" style={{ borderTop: "1px solid var(--border)", padding: 40, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--text-tertiary)" }}>
        <div style={{ width: 22, height: 22, background: "linear-gradient(135deg, oklch(0.72 0.22 285), oklch(0.62 0.28 310))", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, opacity: 0.7 }}>✦</div>
        <span style={{ fontFamily: "var(--font-sora)", fontSize: 13, fontWeight: 500, letterSpacing: "-0.02em" }}>BlindSpot</span>
      </a>
      <ul className="footer-links" style={{ display: "flex", gap: 28, listStyle: "none" }}>
        {links.map(({ label, href }) => (
          <li key={label}><a href={href} target="_blank" rel="noreferrer" style={{ color: "var(--text-tertiary)", textDecoration: "none", fontSize: 13 }}>{label}</a></li>
        ))}
      </ul>
      <div style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-mono)", textAlign: "right", lineHeight: 1.8 }}>
        <div>© 2026 BlindSpot</div>
        <div style={{ color: "rgba(255,255,255,0.18)" }}>Released Jan 2026 · Updated May 2026</div>
      </div>
    </footer>
  );
}
