import ShimmerText from "@/components/kokonutui/shimmer-text";
import TweetCard from "@/components/kokonutui/tweet-card";
import React from "react";

const XCards = () => {
  return (
    <div 
         style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
    className=" flex flex-col ">
        <div className=" flex justify-center mt-30 ">
            <ShimmerText className=' text-6xl' text={"MY TWEETS"} />
        </div>
      <div className=" h-[50vh] items-center w-full flex justify-evenly">
        <TweetCard
          authorName={"sujal"}
          authorHandle={"Sujal3654282297"}
          authorImage={
            "https://pbs.twimg.com/profile_images/1941829109262528512/WTgPV2dk_400x400.jpg"
          }
          reply={{
            authorName: "Naman",
            authorHandle: "namn2453",
            authorImage:
              "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
            content: "Awesome.",
            isVerified: true,
            timestamp: "Aug 13, 2025",
          }}
          content={["Bunking college for learning skills is not cheating"]}
          timestamp={"Aug 13, 2025"}
        />
        <TweetCard
          authorName={"sujal"}
          authorHandle={"Sujal3654282297"}
          reply={{
            authorName: "Naman",
            authorHandle: "namn2453",
            authorImage:
              "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
            content: "Keep It Up",
            isVerified: true,
            timestamp: "Sep 6, 2025",
          }}
          authorImage={
            "https://pbs.twimg.com/profile_images/1941829109262528512/WTgPV2dk_400x400.jpg"
          }
          content={["Resolving casual bugs of my internship project 🙃"]}
          timestamp={"Sep 6, 2025"}
        />
      </div>
    </div>
  );
};

export default XCards;
