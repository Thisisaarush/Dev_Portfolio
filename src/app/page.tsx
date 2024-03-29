// components
import DesignSection from "@/Components/DesignSection/DesignSection";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ProjectsSection from "@/Components/ProjectsSection/ProjectsSection";
import RainbowPrism from "@/Components/RainbowPrism/RainbowPrism";

export default function Home() {
  return (
    <main>
      <RainbowPrism />
      <HeroSection />
      <ProjectsSection />
      <DesignSection />
    </main>
  );
}
