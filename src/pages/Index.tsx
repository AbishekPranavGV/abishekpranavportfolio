import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <footer className="text-center py-12 text-muted-foreground text-sm border-t border-border">
        © 2025 Abishek Pranav G V. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
