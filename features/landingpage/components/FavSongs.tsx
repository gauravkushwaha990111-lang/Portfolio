import ShimmerText from '@/components/kokonutui/shimmer-text';
import { Carousel_003 } from '@/components/ui/skiper-ui/skiper49';
import React from 'react'
import { PLAYLIST_IMAGES } from '@/lib/siteData';

const FavSongs = () => {

  return (
    <div
    className='flex justify-center flex-col pt-10 bg-transparent w-full'>
      <ShimmerText className=' p-3 text-6xl' text={'Current Playlist'}/>
         <Carousel_003
      images={PLAYLIST_IMAGES}
      showPagination={true}
      showNavigation={true}
      loop={true}
      autoplay={true}
      spaceBetween={0}
    />
      
    </div>
  )
}

export default FavSongs
