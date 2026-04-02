import { HoverExpand_001 } from '@/components/ui/skiper-ui/skiper52';
import React from 'react'

const HowerExpand = () => {
     const images = [
    {
      src: "/path/to/image1.jpg",
      alt: "kg section",
      code: "# 01",
    },
    {
      src: "https://i.pinimg.com/736x/37/dc/1d/37dc1d83c8e7577ebebdfb70ba0fe70b.jpg",
      alt: " class 2 to 5",
      code: "# 02",
    },
    // ... more images
  ];
  return (
    <div>
       <HoverExpand_001 images={images} className="" />;
    </div>
  )
}

export default HowerExpand
