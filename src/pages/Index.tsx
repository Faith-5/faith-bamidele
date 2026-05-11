import { ThemeProvider } from "@/hooks/useTheme";
import WaterBackground from "@/components/WaterBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ThinkingLabSection from "@/components/ThinkingLabSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <ThemeProvider>
    <WaterBackground />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <ProjectsSection />
      <ThinkingLabSection />
      <SkillsSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </main>
    <Footer />
  </ThemeProvider>
);

export default Index;
