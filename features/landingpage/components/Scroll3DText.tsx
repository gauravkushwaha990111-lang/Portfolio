import { Skiper28 } from "@/components/ui/skiper-ui/skiper28";
import React from "react";


const Scroll3DText = () => {
   const rawWords = process.env.NEXT_PUBLIC_ABOUT_WORDS || "KON,VO,ABEY,OYY,SUN,DEKH";
   const array = rawWords.split(",");
   
   let text = process.env.NEXT_PUBLIC_ABOUT_TEXT || "Default Text...";
   
    return (
    <div className=" bg-transparent ">
        <Skiper28 text={text} arr={array} />
        
      
    </div>
  );
};

export default Scroll3DText;
