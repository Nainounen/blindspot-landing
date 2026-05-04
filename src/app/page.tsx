import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MockupSection from "@/components/MockupSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import RecorderSection from "@/components/RecorderSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="mesh mesh-1" />
      <div className="mesh mesh-2" />
      <div className="mesh mesh-3" />
      <Nav />
      <main>
        <Hero />
        <MockupSection />
        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <HowItWorks />
        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <Features />
        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <RecorderSection />
        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
