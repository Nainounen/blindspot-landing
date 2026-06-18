import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MockupSection from "@/components/MockupSection";
import RecorderSection from "@/components/RecorderSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// Re-check GitHub for new releases every hour
export const revalidate = 3600;

async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Nainounen/blind-spot/releases/latest",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return "2.3.2";
    const data = await res.json();
    // tag_name is like "v2.3.2" — strip the leading "v"
    return (data.tag_name as string).replace(/^v/, "");
  } catch {
    return "2.3.2";
  }
}

export default async function Home() {
  const version = await getLatestVersion();

  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero version={version} />
        <MockupSection />
        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <RecorderSection />
        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <CTA />
      </main>
      <Footer version={version} />
    </>
  );
}
