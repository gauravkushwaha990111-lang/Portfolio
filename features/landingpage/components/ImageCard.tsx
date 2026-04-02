import { Skiper16 } from '@/components/ui/skiper-ui/skiper16'
import React from 'react'


const ImageCard = () => {

    const projects = [
  {
    title: "Project 1",
    src: "https://i.ibb.co/qMnpd4BJ/IMG20260117145221-jpg.jpg",
  },
  {
    title: "Project 2",
    src: "https://i.ibb.co/9k5tbbPt/IMG-20260104-142318-jpg.jpg",
  },
   {
    title: "Project 3",
    src: "https://i.ibb.co/tT9q89X9/Screenshot-2026-01-13-20-47-03-51-6012fa4d4ddec268fc5c7112cbb265e7-jpg.jpg",
  }
  
];

  return (
    <div className=' bg-gray-700' >
        <Skiper16 projectz={projects} />
    </div>
  )
}

export default ImageCard
