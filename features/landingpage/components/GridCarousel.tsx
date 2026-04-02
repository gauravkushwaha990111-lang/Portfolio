import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'
import { GRID_IMAGES } from '@/lib/siteData';

const GridCarousel = () => {

  return (
    <div>
      <Skiper30 img={GRID_IMAGES} />
    </div>
  )
}

export default GridCarousel
