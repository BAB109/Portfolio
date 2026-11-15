import { RouterProvider, useRouter } from './router';
import ConstellationCanvas from './components/ui/ConstellationCanvas';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import AllProjects from './pages/AllProjects';

function MainApp() {
  const { path } = useRouter();
  const isProjectsPage = path === '/projects';

  return (
    <div className="relative min-h-screen bg-[#0B172B] text-[#F1F5F9] selection:bg-[#48E6C1] selection:text-[#0B172B]">
      {/* Animated Constellation Canvas Background */}
      <ConstellationCanvas />

      {/* Fixed Numbered Navigation Header */}
      <Navbar />

      {/* Dynamic View: All Projects Archive or Full Homepage */}
      {isProjectsPage ? (
        <main className="relative z-10">
          <AllProjects />
        </main>
      ) : (
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>
      )}

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainApp />
    </RouterProvider>
  );
}
