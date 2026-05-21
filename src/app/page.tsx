import AboutSection from "@/components/AboutSection";
import ArtifactsSection from "@/components/ArtifactsSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestingWorkflowSection from "@/components/TestingWorkflowSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArtifactsSection />
        <TestingWorkflowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
