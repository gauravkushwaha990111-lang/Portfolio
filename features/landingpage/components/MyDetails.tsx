"use client";
import React, { useState, useEffect } from 'react'
import { AnimatedNumber_002,
  AnimatedNumber_003,
  
 } from '@/components/ui/skiper-ui/skiper37'
import { div } from 'framer-motion/client'
import { cormorant_garamond, geist, inter, pacifico, playfair_Display, poppins, yatraOne } from '@/lib/fonts'
import { SlidingNumber } from '@/components/motion-primitives/sliding-number'
import CardFlip from '@/components/kokonutui/card-flip'
import ShimmerText from '@/components/kokonutui/shimmer-text'
import { MY_STATS } from '@/lib/siteData';
import { motion } from 'framer-motion';

const MyDetails = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will run only on the client, after the initial render
    setIsClient(true);
  }, []);

  return (
    <div className=' bg-transparent pb-15 pt-10 flex flex-col items-center overflow-hidden'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
          className=" flex justify-center flex-col mt-30 mb-15 "
        >
          <ShimmerText className='  text-6xl' text={"MY STATS"} />
        </motion.div>
        
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 w-full max-w-7xl'>
        {
          MY_STATS.map((item, i)=>(
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
              key={item.title} 
              className=' text-white flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/30'
            >
              
                  {/* <h1 className={` ${geist.className} text-center  font-medium text-5xl`}>{item.title}</h1>
               <AnimatedNumber_003  data={item.value} des={item.numberIn} />
               <SlidingNumber value={10000}/> */}
               {isClient ? (
                 <CardFlip description={`${item.value}`}  title={item.title} subtitle={item.subtitle} features={item.features}  />
               ) : (
                 // Render a placeholder on the server and initial client render to prevent layout shift
                 <div className="h-[320px] w-full max-w-[280px]" />
               )}
            </motion.div>
          ))
        }
      </div>
     
      {/* <AnimatedNumber_002/> */}
    </div>
  )
}

export default MyDetails
