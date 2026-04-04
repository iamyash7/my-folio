import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(211,181,143,0.18),transparent_40%),radial-gradient(circle_at_top_right,rgba(74,126,181,0.18),transparent_34%),linear-gradient(180deg,rgba(8,17,31,0.8),rgba(8,17,31,1))]" />
        <div className="absolute inset-0 bg-grid bg-[size:4rem_4rem] opacity-[0.06]" />
        <div className="absolute left-[-10rem] top-[28rem] h-80 w-80 rounded-full bg-sand/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-8rem] h-96 w-96 rounded-full bg-[#143153] blur-3xl" />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
