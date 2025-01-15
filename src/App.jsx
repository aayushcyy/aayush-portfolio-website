import "./App.css";
import React, { lazy, Suspense } from "react";
const ProjectSection = lazy(() => import("./Components/ProjectSection"));
const ContactSection = lazy(() => import("./Components/ContactSection"));
const Footer = lazy(() => import("./Components/Footer"));
const HeroSection = lazy(() => import("./Components/HeroSection"));
const AboutSection = lazy(() => import("./Components/AboutSection"));
const ProjectSectionMobile = lazy(() =>
  import("./Components/ProjectSectionMobile")
);
const Loader = lazy(() => import("./Components/Loader"));

function App() {
  return (
    <div className="w-full min-h-screen lg:px-20 md:px-14 px-7 items-center flex md:gap-10 lg:gap-20 gap-0 flex-col">
      {/* hero section */}
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>

      {/* about section */}
      <Suspense fallback={<Loader />}>
        <AboutSection />
      </Suspense>

      {/* project section */}
      <span id="projects"></span>

      {/* Desktop Project section */}
      <Suspense fallback={<Loader />}>
        <ProjectSection />
      </Suspense>

      {/* Mobile Project Section */}
      <Suspense fallback={<Loader />}>
        <ProjectSectionMobile />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<Loader />}>
        <ContactSection />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
