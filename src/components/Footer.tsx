import Image from "next/image";

const links = [
  { label: "GitHub", href: "https://github.com/Nainounen/blind-spot" },
  { label: "Releases", href: "https://github.com/Nainounen/blind-spot/releases" },
  { label: "MIT License", href: "https://github.com/Nainounen/blind-spot/blob/main/LICENSE" },
];

export default function Footer({ version }: { version: string }) {
  return (
    <footer className="footer-inner" style={{ borderTop: "1px solid var(--border)", padding: 40, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", color: "var(--text-tertiary)", opacity: 0.6 }}>
        <Image src="/blindspot.svg" alt="BlindSpot" width={22} height={22} style={{ borderRadius: 5 }} />
        <span style={{ fontFamily: "var(--font-sora)", fontSize: 13, fontWeight: 500, letterSpacing: "-0.02em" }}>BlindSpot</span>
      </a>
      <ul className="footer-links" style={{ display: "flex", gap: 28, listStyle: "none" }}>
        {links.map(({ label, href }) => (
          <li key={label}><a href={href} target="_blank" rel="noreferrer" style={{ color: "var(--text-tertiary)", textDecoration: "none", fontSize: 13 }}>{label}</a></li>
        ))}
      </ul>
      <div style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-dm-mono)", textAlign: "right", lineHeight: 1.8 }}>
        <div>© 2026 BlindSpot · v{version}</div>
        <div style={{ color: "rgba(255,255,255,0.18)" }}>macOS 26+ · Universal binary</div>
      </div>
    </footer>
  );
}
