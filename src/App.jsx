import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { AuroraBackground } from './components/ui/aurora-background';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence for 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen antialiased">
      {loading && <LoadingScreen />}

      {!loading && (
        <>
          {/* Fixed full-page aurora background */}
          <div className="fixed inset-0 z-0">
            <AuroraBackground className="h-screen w-screen" showRadialGradient={false}>
              <div />
            </AuroraBackground>
          </div>

          {/* Content layered on top */}
          <div className="relative z-10 animate-in fade-in duration-1000">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
