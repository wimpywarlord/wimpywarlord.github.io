"use client";

import { useRef, VideoHTMLAttributes, useState, useEffect } from "react";
import { useGallery } from "./GalleryViewer";

interface GalleryVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  enableGallery?: boolean;
  children: React.ReactNode;
}

export const GalleryVideo = ({ enableGallery = true, children, ...props }: GalleryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const { openGallery } = useGallery();
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Extract video source from children
    if (videoRef.current) {
      const sourceElement = videoRef.current.querySelector("source");
      if (sourceElement) {
        setVideoSrc(sourceElement.src);
      }
    }
  }, [children]);

  const handleClick = () => {
    if (enableGallery && videoRef.current) {
      // Pause the thumbnail video
      videoRef.current.pause();

      openGallery(
        videoRef.current,
        <video
          ref={(el) => {
            if (el) {
              el.volume = 0.8; // Set volume to 80%
            }
          }}
          className={`${props.className} cursor-default`}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          controls
          autoPlay
          loop
        >
          {children}
        </video>,
        videoSrc
      );
    }
  };

  return (
    <video
      {...props}
      ref={videoRef}
      className={`${props.className} ${enableGallery ? "cursor-pointer" : ""}`}
      onClick={enableGallery ? handleClick : props.onClick}
      autoPlay
      loop
      muted
      playsInline
    >
      {children}
    </video>
  );
};
