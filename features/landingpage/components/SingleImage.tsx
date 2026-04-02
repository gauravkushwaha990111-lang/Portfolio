"use client";

import { SINGLE_FEATURE_IMAGE } from '@/lib/siteData';
import React from 'react';
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { motion } from 'framer-motion';

const SingleImage = () => {
  return (
    <div className="w-full bg-transparent flex flex-col justify-center items-center py-20">
      
      {/* The Text Loop Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className=" text-white text-5xl md:text-8xl gap-6 md:gap-10 grid grid-cols-2 w-full max-w-5xl px-10 mb-16"
      >
        <div className="flex justify-center md:justify-end md:pr-10 font-bold">
          <p>THE</p> 
        </div>
        <TextLoop
          className='overflow-y-clip text-cyan-300 font-bold'
          transition={{
            type: 'spring',
            stiffness: 900,
            damping: 80,
            mass: 10,
          }}
          variants={{
            initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
            animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
            exit: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' },
          }}
        >
          <span>EDITOR</span>
          <span>GAMER</span>
          <span>DEVELOPER</span>
          <span>EXPLORER</span>
        </TextLoop> 
      </motion.div>

      {/* About Text & Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl px-10 items-center">
        
        {/* Left Column: About Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-6 text-white/70 text-lg md:text-xl leading-relaxed font-light"
        >
          <p>
             i’ve been working since I was 13, long before I even knew where my career would lead. That early start in the workforce taught me discipline and the value of hard work while I was still in school. I’m currently 18 and just finished my 12th-grade boards, and that same drive has now evolved into a passion for technology and digital art.
          </p>
          <p>
            When it comes to tech, I’m all about Vibe Coding—building cool, modern projects that focus on the right aesthetic and energy. I’m a huge fan of Anime and Gaming, and I spend a lot of my time on Video Editing and keeping up with the latest Web Series. These aren't just hobbies for me; they inspire the creative way I look at web development and design. I’m just getting started, but I’ve already got years of hustle behind me."
          </p>
        </motion.div>

        {/* Right Column: Featured Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
          className="relative group perspective-[1000px]"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-20 blur-2xl rounded-[3rem] z-0 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          <div className="relative z-10 aspect-square md:aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/20">
            <img 
              src={SINGLE_FEATURE_IMAGE} 
              alt="Gaurav Profile" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SingleImage;