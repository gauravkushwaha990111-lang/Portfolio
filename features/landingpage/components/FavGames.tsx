import ShimmerText from '@/components/kokonutui/shimmer-text';
import { Carousel_003 } from '@/components/ui/skiper-ui/skiper49';
import React from 'react'
import { GAMES_IMAGES } from '@/lib/siteData';

const FavGames = () => {

  return (
    <div
    className='flex justify-center flex-col pt-10 bg-transparent w-full'>
      <ShimmerText className=' p-3 text-6xl' text={'Games i played'}/>
         <Carousel_003
      images={GAMES_IMAGES}
      showPagination={true}
      showNavigation={true}
      loop={true}
      autoplay={true}
      spaceBetween={0}
    />
    </div>
  )
}

export default FavGames