import { ParticleBackground } from "./components/ParticleBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-slate-300 font-sans selection:bg-accent/30 selection:text-white relative">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 bg-card py-6 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Ziad Eid. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
