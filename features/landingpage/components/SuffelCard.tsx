"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Carousel_002 } from '@/components/ui/skiper-ui/skiper48';
import React, { useState } from 'react'
import { SHUFFLE_IMAGES } from '@/lib/siteData';


const SuffelCard = () => {
  const [cIn, setcIn] = useState(0);
     const images = [
    {
      src: "https://i.pinimg.com/736x/c0/8a/80/c08a8026aba7b3e8e6d905b2416a56be.jpg",
      alt: "FAV SWEET",
    },
    {
      src: "https://i.pinimg.com/736x/7e/4c/5a/7e4c5a682427c8a47e2c7a46365763f7.jpg",
      alt: "FAV CITY",
    },
    {
      src: "https://i.pinimg.com/736x/8e/47/d0/8e47d0bd73dafa1d339cb2b2b13c2b7e.jpg",
      alt: "FAV COLOR",
    },
    {
      src: "	https://i.pinimg.com/736x/59/ee/40/59ee4047d303d7ccf7d9cd16fc3d864c.jpg",
      alt: "FAV HOBBY",
    }, {
      src: "https://i.pinimg.com/1200x/ec/da/d9/ecdad9e6f73970d0ba23ddc7ebc9128d.jpg",
      alt: "MY BEHAVIOUR",
    },
     {
      src: "https://i.pinimg.com/736x/77/4f/1b/774f1bd62a8b721ae3c62dc8cb0a53d6.jpg",
      alt: "FAV PLAYER",
    },
    // ... more images 	
  ];
  return (
    <div
    className=' w-full flex bg-transparent pt-10  ' >
      <div className=' w-full grid grid-cols-3 ' >
 <ShimmerText className=' text-7xl' text={SHUFFLE_IMAGES[cIn].alt.split(" ")[0]} />
       <Carousel_002
       className=' '
       cIndex={(i)=>{setcIn(i)}}
      images={SHUFFLE_IMAGES}
      showPagination={true}
      showNavigation={true}
      loop={true}
      autoplay={true}
      spaceBetween={40}
    />
   
    <ShimmerText className=' text-cyan-300 text-7xl' text={SHUFFLE_IMAGES[cIn].alt.split(" ")[1]} />
      </div>
   
      
    </div>
  )
}

export default SuffelCard
