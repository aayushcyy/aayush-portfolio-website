import "./App.css";
import ProjectSection from "./Components/ProjectSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ProjectSectionMobile from "./Components/ProjectSectionMobile";

function App() {
  return (
    <div className="w-full min-h-screen md:px-[120px] px-5 items-center flex md:gap-0 gap-0 flex-col">
      {/* hero section */}
      <HeroSection />

      {/* about section */}
      <AboutSection />

      {/* project section */}
      <span id="projects"></span>
      {/* Desktop Project section */}
      <ProjectSection />
      {/* Mobile Project Section */}
      <ProjectSectionMobile />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
