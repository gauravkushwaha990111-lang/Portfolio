"use client";

import {
  ThemeToggleButton1,
  ThemeToggleButton2,
  ThemeToggleButton3,
  ThemeToggleButton4,
} from "@/components/ui/skiper-ui/skiper4";
import { useThemeToggle } from "@/components/ui/skiper-ui/skiper26";
import React, { useState, useEffect } from "react";

import Hero from "./components/Hero";
import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";
import Scroll3DText from "./components/Scroll3DText";
import { Skiper28 } from "@/components/ui/skiper-ui/skiper28";
import { SpringMouseFollow } from "@/components/ui/skiper-ui/skiper61";
import { Skiper62 } from "@/components/ui/skiper-ui/skiper62";
import ImageCard from "./components/ImageCard";
import SingleImage from "./components/SingleImage";
import FavSongs from "./components/FavSongs";
import FavGames from "./components/FavGames";
import SuffelCard from "./components/SuffelCard";
import HowerExpand from "./components/HowerExpand";
import MyDetails from "./components/MyDetails";
import Contributions from "./components/Contributions";
import MyProjects from "./components/MyProjects";
import ParticlesBG from "./components/ParticlesBG";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize, Minimize, Smartphone, Hexagon } from "lucide-react";

const MainLandinPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Preloader timeout set to 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Cross-browser Fullscreen Listener
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || (document as any).webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    // Force EXACT PC View on Mobile Landscape
    const enforcePCViewInLandscape = () => {
      let viewportMeta = document.querySelector("meta[name=viewport]");
      if (!viewportMeta) {
        viewportMeta = document.createElement("meta");
        viewportMeta.setAttribute("name", "viewport");
        document.head.appendChild(viewportMeta);
      }
      
      const isLandscape = window.innerWidth > window.innerHeight;
      const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

      if (isMobile && isLandscape) {
        // Browser ko force karega ki exactly 1200px (PC View) render kare without any layout shifts
        viewportMeta.setAttribute("content", "width=1200, user-scalable=no");
      } else {
        // Normal responsive behavior
        viewportMeta.setAttribute("content", "width=device-width, initial-scale=1");
      }
    };

    window.addEventListener("resize", enforcePCViewInLandscape);
    window.addEventListener("orientationchange", enforcePCViewInLandscape);
    enforcePCViewInLandscape();

    return () => {
      clearTimeout(timer);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      window.removeEventListener("resize", enforcePCViewInLandscape);
      window.removeEventListener("orientationchange", enforcePCViewInLandscape);
    };
  }, []);

  // Fullscreen toggle logic jese YouTube pe hota hai
  const toggleFullscreen = () => {
    const doc = document.documentElement as any;
    const fullscreenEl = document.fullscreenElement || (document as any).webkitFullscreenElement;

    if (!fullscreenEl) {
      if (doc.requestFullscreen) doc.requestFullscreen();
      else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();
      else if (doc.msRequestFullscreen) doc.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if ((document as any).webkitExitFullscreen) (document as any).webkitExitFullscreen();
      else if ((document as any).msExitFullscreen) (document as any).msExitFullscreen();
    }
  };

  return (
    <div 
      className="relative min-h-screen w-screen overflow-x-hidden"
      style={{
        background: "radial-gradient(125% 125% at 50% 50%, #050505 40%, #2b1055 100%)",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Portrait Mode Block Overlay (Sirf mobile ke vertical hone par dikhega) */}
      <div className="fixed inset-0 z-[999999] bg-[#050505] flex-col items-center justify-center text-white hidden portrait:flex md:portrait:hidden">
        {/* Animated Phone Rotating Icon */}
        <motion.div 
          animate={{ rotate: [0, -90, -90, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", times: [0, 0.4, 0.8, 1] }}
          className="mb-8"
        >
          <Smartphone className="w-20 h-20 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-center">ROTATE DEVICE</h2>
        <p className="text-white/60 text-center px-10 text-lg font-light leading-relaxed">
          Please rotate your phone to <strong className="text-cyan-300">Landscape Mode</strong> <br/> for the ultimate PC-like experience.
        </p>
      </div>

      {/* YouTube Style Floating Fullscreen Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleFullscreen}
        className="fixed bottom-6 right-6 z-[99999] p-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full text-white transition-all shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:shadow-cyan-500/40 hover:border-cyan-400/50 flex items-center justify-center cursor-pointer"
      >
        {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
      </motion.button>

      {/* Animated Preloader Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505]"
          >
            {/* Custom Logo & Spinner Wrapper */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Neon Glowing Spinner */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute h-24 w-24 rounded-full border-t-4 border-cyan-400 border-r-4 border-transparent border-b-4 border-fuchsia-500 border-l-4 border-transparent shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              />
              {/* Center Sci-fi Logo (Hexagon) */}
              <motion.div animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <Hexagon className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" size={40} strokeWidth={1.5} />
              </motion.div>
            </div>
            
            {/* Pulsing Loading Text */}
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-cyan-300 font-medium tracking-[0.4em] text-sm mt-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            >
              SYSTEM INITIALIZING...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom Trailing Cursor */}
      <SpringMouseFollow />

      <ParticlesBG />
      <div className="relative z-10">
      <section>
        <Hero />
      </section>
    
      <section>
        <SingleImage />
      </section>
      {/* <section>
    <ImageCard/>
   </section> */}
      <section>
        <FavSongs />
      </section>
      <section>
        <FavGames />
      </section>
      <section>
        <SuffelCard />
      </section>
      {/* <section>
    <HowerExpand/>
   </section> */}
      <section>
        <MyDetails />
      </section>
      <section>
        <MyProjects />
      </section>
      <section>
        <Contributions/>
      </section>
      <Footer />
      </div>
       
    </div>
  );
};

export default MainLandinPage;
