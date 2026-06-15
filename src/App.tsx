import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Contact } from "./components/Contact";
import { Background } from "./components/Background";

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative selection:bg-brand-accent/30 selection:text-white">
      <Background />
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-accent/50 rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{ x: cursorPos.x - 16, y: cursorPos.y - 16 }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-accent rounded-full pointer-events-none z-[100] hidden md:block shadow-[0_0_10px_#3B82F6]"
        animate={{ x: cursorPos.x - 3, y: cursorPos.y - 3 }}
        transition={{ type: "spring", damping: 30, stiffness: 450, mass: 0.2 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[60] shadow-[0_0_10px_#3B82F6]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </main>

      {/* Floating UI Elements */}
      <div className="fixed bottom-10 right-10 z-[40] hidden lg:block">
        <div className="flex flex-col gap-4">
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 2 }}
             className="glass-card p-3 flex flex-col items-center gap-2"
           >
             <span className="text-[10px] items-center font-mono text-white/40 rotate-90 mb-4 whitespace-nowrap uppercase tracking-widest font-bold">Scroll Exploration</span>
             <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
           </motion.div>
        </div>
      </div>
    </div>
  );
}
