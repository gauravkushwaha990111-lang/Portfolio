"use client";
import React, { useState, useEffect, useRef } from 'react'
import { Skiper58, TextRoll } from '@/components/ui/skiper-ui/skiper58'
import { ColorTheme } from '@/lib/theme'
import { bodoniModa, geist, inter, notoSansDevanagari, pacifico, pixelifySans, rozhaOne, yatraOne } from '@/lib/fonts';
import { CrowdCanvas } from '@/components/ui/skiper-ui/skiper39';
import { motion, AnimatePresence } from 'framer-motion';
import { SpringMouseFollow } from '@/components/ui/skiper-ui/skiper61';
import DynamicText from '@/components/kokonutui/dynamic-text';
import { ChevronDown } from 'lucide-react';



const Hero = () => {
    const {bgPrimary,bgSecondary,textPrimary,textSecondary,border} = ColorTheme();

    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showName, setShowName] = useState(false);
    const [showCrowd, setShowCrowd] = useState(false);

    const greetings = ["HELLO", "HOLA", "BONJOUR", "CIAO", "NÍ HAO", "नमस्ते"];
    const isFirstLoad = useRef(true);

    useEffect(() => {
        if (greetingIndex < greetings.length - 1) {
            // Waits 2.5s on initial load for the preloader to disappear, then starts immediately on subsequent scrolls
            const delay = (greetingIndex === 0 && isFirstLoad.current) ? 2500 : 350; 
            const timer = setTimeout(() => {
                setGreetingIndex((prev) => prev + 1);
            }, delay); 
            return () => clearTimeout(timer);
        } else {
            // Sequence starts after Hindi
            const nameTimer = setTimeout(() => setShowName(true), 600);
            const crowdTimer = setTimeout(() => setShowCrowd(true), 1500);
            return () => {
                clearTimeout(nameTimer);
                clearTimeout(crowdTimer);
            };
        }
    }, [greetingIndex]);

    useEffect(() => {
        // Scroll lock handler
        if (isFirstLoad.current) {
            if (!showCrowd) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                document.body.style.overflowX = 'hidden';
                isFirstLoad.current = false;
            }
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.overflowX = 'hidden';
        };
    }, [showCrowd]);

    const handleViewportEnter = () => {
        if (!isFirstLoad.current) {
            setGreetingIndex(0);
            setShowName(false);
            setShowCrowd(false);
        }
    };
   
  return (
    <div 
    className={` relative bg-transparent h-screen flex-col w-full flex justify-center items-center `}>
        <div  className={` px-0  w-full  z-10 absolute top-[20%] -translate-y-1/2  flex flex-col  `}>
        
        {/* Multi-language Greeting that stops at Hindi */}
        <motion.div 
          onViewportEnter={handleViewportEnter}
          className="relative flex justify-center items-center h-[80px] md:h-[100px] mb-2 overflow-hidden w-full cursor-default"
        >
          <AnimatePresence>
            <motion.h1
              key={greetingIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`absolute ${textPrimary} ${greetingIndex === greetings.length - 1 ? notoSansDevanagari.className : bodoniModa.className} text-6xl md:text-8xl font-bold tracking-wider`}
            >
              {greetings[greetingIndex]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className=' w-full flex justify-center gap-6  '
        >
          <motion.div whileHover={{ scale: 1.1, rotate: -5, filter: "drop-shadow(0px 0px 15px rgba(103, 232, 249, 0.8))" }} className=' cursor-default '>
            <TextRoll className={` ${textPrimary} ${geist.className} text-cyan-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-200 hover:to-blue-600 transition-all duration-300 font-medium text-6xl md:text-7xl  `} center >
              i'm
        </TextRoll>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1, rotate: 5, filter: "drop-shadow(0px 0px 25px rgba(217, 70, 239, 0.8))" }} className=' cursor-default '>
            <TextRoll className={` ${textPrimary} ${pacifico.className} text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 animate-text-gradient font-medium text-6xl md:text-7xl capitalize `} center >
              GAURAV
        </TextRoll>
          </motion.div>
        </motion.div>
        
 

        </div>
         
         {/* Crowd Background Blended */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: showCrowd ? 0.2 : 0 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="relative h-screen z-0 w-full invert blur-[1px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"
         >
           <CrowdCanvas src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png' rows={15} cols={7} />
         </motion.div>

         {/* Scroll Down Indicator */}
         <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showCrowd ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 pointer-events-none"
         >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <ChevronDown className="w-8 h-8 text-cyan-300/80" />
          </motion.div>
         </motion.div>
    
      </div>
  )
}

export default Hero
