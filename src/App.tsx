/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

const projects = [
  {
    id: "visual-research",
    title: "Visual Research",
    subtitle: "Layes",
    image: "https://picsum.photos/seed/visual/1200/1600",
    hoverImage: "https://picsum.photos/seed/visual-hover/1200/1600",
    link: "https://sashasatchi.com/projects/visual-research",
  },
  {
    id: "ekonika-x-cosmoscow",
    title: "Ekonika x Cosmoscow",
    subtitle: "Chess",
    image: "https://picsum.photos/seed/chess/1200/1600",
    hoverImage: "https://picsum.photos/seed/chess-hover/1200/1600",
    link: "https://sashasatchi.com/projects/ekonika-x-cosmoscow",
  },
  {
    id: "still-life",
    title: "Still-life",
    subtitle: "Exploration of forms",
    image: "https://picsum.photos/seed/stilllife/1200/1600",
    hoverImage: "https://picsum.photos/seed/stilllife-hover/1200/1600",
    link: "https://sashasatchi.com/projects/still-life",
  },
  {
    id: "stone-cup",
    title: "Stone Cup",
    subtitle: "Hybrid object",
    image: "https://picsum.photos/seed/stone/1200/1600",
    hoverImage: "https://picsum.photos/seed/stone-hover/1200/1600",
    link: "https://sashasatchi.com/projects/stone-cup",
  },
  {
    id: "ekonika",
    title: "Ekonika",
    subtitle: "Tenderness",
    image: "https://picsum.photos/seed/tenderness/1200/1600",
    hoverImage: "https://picsum.photos/seed/tenderness-hover/1200/1600",
    link: "https://sashasatchi.com/projects/ekonika",
  },
  {
    id: "kitchen-ceremony",
    title: "Kitchen Ceremony",
    subtitle: "Warmth",
    image: "https://picsum.photos/seed/kitchen/1200/1600",
    hoverImage: "https://picsum.photos/seed/kitchen-hover/1200/1600",
    link: "https://sashasatchi.com/projects/kitchen-ceremony",
  },
];

function Home({ isLoaded, setIsHovering, setHoveredId, hoveredId }: any) {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 md:gap-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 1.2, 
              delay: index * 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="group cursor-none"
            onMouseEnter={() => {
              setIsHovering(true);
              setHoveredId(project.id);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setHoveredId(null);
            }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
              <motion.img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="mt-6 flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h2 className="text-lg md:text-xl font-medium tracking-tight uppercase">
                  {project.title}
                </h2>
                <span className="text-[10px] md:text-xs opacity-40 font-mono">
                  0{index + 1}
                </span>
              </div>
              <p className="text-xs md:text-sm italic opacity-60 font-serif">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

function Info({ setIsHovering }: any) {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto min-h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase mb-12 leading-none">
            About<br/>SS Studio
          </h2>
          <div className="space-y-6 text-lg md:text-xl opacity-80 leading-relaxed font-light">
            <p>
              SS Studio is a creative practice specializing in conceptual still life photography, sculptural object compositions, and visual narratives. 
            </p>
            <p>
              Founded by a collective of artists and photographers, the studio explores the intersection of art, design, and commercial aesthetics. Our work is characterized by a meticulous attention to form, texture, and light, creating images that are both minimalist and deeply evocative.
            </p>
            <p>
              We collaborate with global brands, editorials, and art projects to develop unique visual identities and compelling stories through the lens of still life.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col justify-end gap-12"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-medium opacity-40 mb-4">Services</h3>
              <ul className="text-sm md:text-base space-y-2 uppercase tracking-tight">
                <li>Art Direction</li>
                <li>Still Life Photography</li>
                <li>Set Design</li>
                <li>Visual Research</li>
                <li>Brand Identity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-medium opacity-40 mb-4">Contact</h3>
              <a 
                href="mailto:sstudio@yahoo.com" 
                className="text-lg md:text-2xl hover:opacity-50 transition-opacity underline underline-offset-8"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                sstudio@yahoo.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsReady(true), 800);
    }, 1500);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Reset hover state on route change
  useEffect(() => {
    setIsHovering(false);
    setHoveredId(null);
  }, [location]);

  return (
    <div className={`min-h-screen bg-[#F7F7F7] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white cursor-none transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Loading Overlay */}
      {!isReady && (
        <div className="fixed inset-0 z-[200] bg-[#F7F7F7] flex items-center justify-center cursor-none">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-8 h-8 border-t-2 border-[#1A1A1A] rounded-full"
          />
        </div>
      )}

      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto"
        >
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-medium tracking-tight uppercase hover:opacity-50 transition-opacity"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            SS Studio
          </Link>
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col items-end gap-1 text-sm uppercase tracking-widest font-medium pointer-events-auto"
        >
          <Link 
            to="/" 
            className={`hover:opacity-50 transition-opacity ${location.pathname === '/' ? 'opacity-50' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Projects
          </Link>
          <Link 
            to="/info" 
            className={`hover:opacity-50 transition-opacity ${location.pathname === '/info' ? 'opacity-50' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Info
          </Link>
          <a 
            href="https://www.instagram.com/sstudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-50 transition-opacity flex items-center gap-1"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Instagram
          </a>
        </motion.nav>
      </header>

      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<Home isLoaded={isLoaded} setIsHovering={setIsHovering} setHoveredId={setHoveredId} hoveredId={hoveredId} />} />
          <Route path="/info" element={<Info setIsHovering={setIsHovering} />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-40">
        <div>
          SS Studio 2026©
        </div>
        <div className="flex gap-8">
          <a 
            href="mailto:sstudio@yahoo.com" 
            className="hover:opacity-100 transition-opacity"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Email
          </a>
        </div>
        <div>
          Design site by <span className="hover:opacity-100 transition-opacity underline underline-offset-4">md sajjad</span>
        </div>
      </footer>

      {/* Custom Cursor / Interaction Element */}
      <motion.div 
        className={`fixed top-0 left-0 bg-white pointer-events-none z-[100] hidden md:block overflow-hidden ${hoveredId ? '' : 'mix-blend-difference'}`}
        animate={{
          x: mousePos.x - (hoveredId ? 120 : isHovering ? 60 : 8),
          y: mousePos.y - (hoveredId ? 160 : isHovering ? 20 : 8),
          width: hoveredId ? 240 : isHovering ? 120 : 16,
          height: hoveredId ? 320 : isHovering ? 40 : 16,
          borderRadius: hoveredId || isHovering ? "2px" : "9999px",
          opacity: isReady ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      >
        {hoveredId && (
          <motion.img
            key={hoveredId}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            src={projects.find(p => p.id === hoveredId)?.hoverImage}
            className="w-full h-full object-cover mix-blend-normal"
            referrerPolicy="no-referrer"
          />
        )}
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
