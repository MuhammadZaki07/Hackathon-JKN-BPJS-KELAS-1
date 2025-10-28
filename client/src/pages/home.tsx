import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import { StatisticsSection } from "@/components/statistics-section";
import { ChartsSection } from "@/components/charts-section";
import { TeamSection } from "@/components/team-section";
import { InnovationSection } from "@/components/innovation-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <StatisticsSection />
        <ChartsSection />
        <TeamSection />
        <InnovationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
