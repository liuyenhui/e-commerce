"use client";
import ReactPlayer from "react-player";
import React from "react";
import { useEffect, useState } from "react";
export const VideoPlayer = ({
  videoUrl,
  children,
}: {
  videoUrl: string;
  children: React.ReactNode;
}) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div>
      {domLoaded && (
        <div className="relative z-0 flex justify-center items-center w-full h-full">
          <ReactPlayer
            width="100%"
            height="100%"
            loop={true}
            muted={true}
            controls={false}
            playing={true}
            url={videoUrl}
          ></ReactPlayer>
          <div className="absolute bottom-0 right-0 z-10">{children}</div>
        </div>
      )}
    </div>
  );
};
