"use client";

import ShimmerText from '@/components/kokonutui/shimmer-text';
import React from 'react';
import { MY_PROJECTS } from '@/lib/siteData';
import { motion } from 'framer-motion';

const MyProjects = () => {

  return (
    <div className='relative flex flex-col bg-transparent items-center justify-center pt-20 pb-20 w-full overflow-hidden'>
      
      {/* Ambient Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-10 flex justify-center flex-col mb-15"
      >
        <ShimmerText className='text-6xl' text={"MY PROJECTS"} />
      </motion.div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 w-full max-w-7xl">
        {MY_PROJECTS.map((proj, i) => (
          <motion.a 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             whileHover={{ y: -10 }}
             transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
             viewport={{ once: false, margin: "-50px" }}
             key={proj.title} href={proj.link} target="_blank" rel="noreferrer"
             className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            
            {/* Image Section */}
            <div className="aspect-video w-full overflow-hidden relative">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Subtle dark gradient overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{proj.title}</h3>
              <p className="text-white/70 line-clamp-3 font-light">{proj.description}</p>
            </div>

            {/* Hover Glow Line effect at the bottom of the card */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-500 group-hover:w-full"></div>
            
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;